"""The application's model objects"""
import sqlalchemy as sa
from sqlalchemy import orm
from sqlalchemy import schema, types, and_
from pylons import session, request
from rentfox.lib.types_uuid import UUID
from rentfox.model import meta, Floorplan
from rentfox.lib.search import Index, Update as IndexUpdate

import uuid, datetime

def now():
    return datetime.datetime.now()

unit_table = schema.Table('unit', meta.metadata,
    schema.Column('id', UUID(), primary_key=True),
    schema.Column('propertyid', UUID(),
        schema.ForeignKey('property.id'), nullable=False),
    schema.Column('floorplanid', UUID(),
        schema.ForeignKey('floorplan.id')),
    schema.Column('label', types.Unicode(10), nullable=False),
    schema.Column('description', types.Unicode(255)),
    schema.Column('created', types.TIMESTAMP(), default=now),
    schema.Column('deleted', UUID())
)


class Unit(object):
    @staticmethod
    def get_unit(unitid):
        return meta.Session.query(Unit).filter(Unit.deleted==None).filter_by(id=unitid).first()
    
    @staticmethod
    def delete(unitid):
        from rentfox.model.recycle import Recycle
        from rentfox.model.property import Property
        from rentfox.model.lease import Lease
        
        unit = meta.Session.query(Unit).filter_by(id=unitid).first()
        property_name = Property.get_name_by_id(unit.propertyid)
        
        recycleId = Recycle.create("Unit {0} deleted from {1}".format(unit.label, property_name))
        
        unit.deleted = recycleId
        Lease.deleteByUnitId(unitid, recycleId)
        
        meta.Session.commit()
        session.save()
        
        index_update = IndexUpdate()
        index_update.updateItem('unit', unitid)
        index_update.updateTerm('deleted', 0, recycleId)
        index_update.update()
    
    @staticmethod
    def unit_exist(unit_label, propertyid):
        existing_units = Unit.get_units_list(propertyid)
        if unit_label in existing_units:
            return 1
        return 0
    
    @staticmethod
    def rename(newlabel, unitid):
        
        from rentfox.model.property import Property
        
        unit = meta.Session.query(Unit).filter(Unit.deleted==None).filter_by(id=unitid).first()
        unit.label = newlabel
        
        meta.Session.commit()
        session.save()
        
        # update index
        property = Property.get_property(unit.propertyid)
        text = ' '.join([str(newlabel), str(newlabel), str(newlabel), str(property.name), str(property.address)])
        index_update = IndexUpdate()
        index_update.updateItem('unit', unitid)
        index_update.updateData(text)
        index_update.update()
        
    @staticmethod
    def get_units_of_property(propertyid):
        units = meta.Session.query(Unit).filter(Unit.deleted==None).filter_by(propertyid=propertyid).all()
        return units
    
    @staticmethod
    def get_units_of_company(companyid):
        from rentfox.model.property import Property
        units = meta.Session.query(Unit).join(Property).filter(Unit.deleted==None).filter(Property.companyid==companyid).all()
        return units
    
    @staticmethod
    def get_units_of_properties(propertyids):
        from rentfox.model.property import Property
        units = meta.Session.query(Unit).filter(Unit.deleted==None).filter(Unit.propertyid.in_(propertyids)).all()
        return units
    
    @staticmethod
    def get_unit_with_propertyid(unit_label, propertyid):
        return meta.Session.query(Unit).filter(Unit.deleted==None).filter_by(propertyid=propertyid).filter_by(label=unit_label).first()
    
    @staticmethod
    def get_units_without_floorplan(propertyid):
        units = meta.Session.query(Unit).filter(Unit.deleted==None).filter_by(propertyid=propertyid).filter_by(floorplanid=None).all()
        return units
    
    @staticmethod
    def get_unit_info(unitid):
        from rentfox.model.property import Property
        record = meta.Session.query(Unit.label,Property.name,Property.id).join(Property).filter(Unit.id==unitid).first()
        return [record[0], record[1], record[2]]
    
    @staticmethod
    def get_propertid_unit(unitid):
        unit = Unit.get_unit(unitid)
        return unit.propertyid
    
    @staticmethod
    def unassign_units_with_floorplan(floorplanid):
        units = meta.Session.query(Unit).filter(Unit.deleted==None).filter_by(floorplanid=floorplanid).update({Unit.floorplanid:None})
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def join_unit_floorplan(propertyid):
        unitsWithFloorplan = meta.Session.query(Unit).filter(Unit.deleted==None).join(Floorplan).filter_by(propertyid=propertyid).all()
        return unitsWithFloorplan
    
    @staticmethod
    def update_floorplan(unitid, floorplanid):
        unit = Unit.get_unit(unitid)
        unit.floorplanid = floorplanid
        
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def get_units_list(propertyid):
        units = meta.Session.query(Unit).filter(Unit.deleted==None).filter_by(propertyid=propertyid).all()
        unitList = []
        for unit in units:
            unitList.append(str(unit.label))
        return unitList
    
    @staticmethod
    def get_num_units(companyid):
        from rentfox.model import Property
        from rentfox.model import Company
        
        company = meta.Session.query(Company).filter(Company.id==companyid).first()
        maxUnits = company.maxunits
        
        records = meta.Session.query(Unit).join(Property).\
                                            filter(and_(Property.companyid==companyid,\
                                                        Unit.propertyid==Property.id,\
                                                        Unit.deleted==None)).all()
        
        unitCount = len(records)
        
        return [unitCount, maxUnits]
        
    @staticmethod
    def get_unit_property_name(unitid):
        from rentfox.model.property import Property
        record = meta.Session.query(Unit.label,Property.name).join(Property).filter(Unit.id==unitid).first()
        return [record[0], record[1]]
    
    @staticmethod
    def update_description(unitid, desc):
        unit = meta.Session.query(Unit).filter(Unit.deleted==None).filter_by(id=unitid).first()
        unit.description = desc
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def create(propertyid, label, index):
        newUnit = Unit()
        newUnit.id = str(uuid.uuid1())
        newUnit.propertyid = propertyid
        newUnit.label = label
        meta.Session.add(newUnit)
        
        from rentfox.model.property import Property
        
        # index for searching later
        property = Property.get_property(propertyid)
        type = 'unit'
        id = newUnit.id
        text = ' '.join([str(label), str(label), str(label), str(property.name), str(property.address)])
        terms = [
                 {'type':'company', 'id':request.environ.get('COMPANY_ID')},
                 {'type':'property', 'id':propertyid},
                 {'type':'unit', 'id':id}
                 ]
        
        index.index(type, id, text, terms)
        
    @staticmethod
    def add_units(units, propertyid):
        
        index = Index()
        
        if '-' in units:
            unitRange = units.split('-')
            start = unitRange[0]
            end = unitRange[1]
            
            # Special case: Allow for labels such as 12-B or C-2 to be added.
            if (start.isdigit() and end.isalpha())\
                or (end.isdigit() and start.isalpha()):
                    Unit.create(propertyid, units, index)
            else:
                existingUnits = Unit.get_units_list(propertyid)
                for unit in range(int(start), int(end) + 1):
                    if str(unit) not in existingUnits:
                        Unit.create(propertyid, unit, index)
        elif ',' in units:
            unitList = units.split(',')
            existingUnits = Unit.get_units_list(propertyid)
            for unit in unitList:
                if str(unit) not in existingUnits:
                    Unit.create(propertyid, unit, index)
        else:
            Unit.create(propertyid, units, index)
        meta.Session.commit()
        session.save()
    
    @staticmethod
    def delete_units(units, propertyid):
        
        from rentfox.model.property import Property
        from rentfox.model.recycle import Recycle
        from rentfox.model.lease import Lease
        
        count = 0
        
        property_name = Property.get_name_by_id(propertyid)
        recycleId = Recycle.create("Units deleted from {0}".format(property_name))
        
        index_update = IndexUpdate()
        
        if '-' in units:
            unitRange = units.split('-')
            start = unitRange[0]
            end = unitRange[1]
            
            # Special case: Allow for labels such as 12-B or C-2 to be deleted.
            if (start.isdigit() and end.isalpha())\
                or (end.isdigit() and start.isalpha()):
                
                existingUnits = Unit.get_units_list(propertyid)
                if str(units) in existingUnits:
                    
                    unit = Unit.get_unit_with_propertyid(units, propertyid)
                    unit.deleted = recycleId
                    
                    index_update.updateItem('unit', unit.id)
                    index_update.updateTerm('deleted', 0, recycleId)
                    index_update.update()
                    
                    Lease.deleteByUnitId(unit.id, recycleId)
                    count += 1
            else:
                existingUnits = Unit.get_units_list(propertyid)
                for unit in range(int(start), int(end) + 1):
                    if str(unit) in existingUnits:
                        unit = Unit.get_unit_with_propertyid(str(unit), propertyid)
                        unit.deleted = recycleId
                        
                        index_update.updateItem('unit', unit.id)
                        index_update.updateTerm('deleted', 0, recycleId)
                        index_update.update()
                        
                        Lease.deleteByUnitId(unit.id, recycleId)
                        count += 1
        elif ',' in units:
            unitList = units.split(',')
            existingUnits = Unit.get_units_list(propertyid)
            for unit in unitList:
                if str(unit) in existingUnits:
                    unit = Unit.get_unit_with_propertyid(str(unit), propertyid)
                    unit.deleted = recycleId
                    
                    index_update.updateItem('unit', unit.id)
                    index_update.updateTerm('deleted', 0, recycleId)
                    index_update.update()
                    
                    Lease.deleteByUnitId(unit.id, recycleId)
                    count += 1
        else:
            unit = Unit.get_unit_with_propertyid(units, propertyid)
            unit.deleted = recycleId
            
            index_update.updateItem('unit', unit.id)
            index_update.updateTerm('deleted', 0, recycleId)
            index_update.update()
            
            Lease.deleteByUnitId(unit.id, recycleId)
            count += 1
        
        if count == 0:
            Recycle.delete(recycleId)
            return False
            
        meta.Session.commit()
        session.save()

    @staticmethod
    def deleteByPropertyId(propertyid, recycleId):
        meta.Session.query(Unit).filter(Unit.propertyid==propertyid).update({Unit.deleted:recycleId})