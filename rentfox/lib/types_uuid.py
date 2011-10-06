import sqlalchemy.types as types

class UUID(types.TypeEngine):
    def get_col_spec(self):
        return "uuid"

    def bind_processor(self, dialect):
        def process(value):
            return value
        return process

    def result_processor(self, dialect):
        def process(value):
            return value
        return process
