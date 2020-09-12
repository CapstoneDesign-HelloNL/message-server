import { Model, ModelAttributes, InitOptions } from "sequelize";
import IDao from "@src/DAO/IDao";
class ObjDao extends Model {
    static init(attr: ModelAttributes, opt: InitOptions): Model {
        return super.init(attr, opt);
    }

    static sync() {
        return super.sync();
    }

    static create(value: any) {
        return super.create(value);
    }
}

export default ObjDao;