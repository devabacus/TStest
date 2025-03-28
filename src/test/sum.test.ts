import assert from "assert";
import { tableAuth, tableCategory, tableTask } from "../consts";
import { DriftClassParser } from '../main';


suite('parser drift test', () => {

    const driftClassCategory = new DriftClassParser(tableCategory)
    const driftClassAuth = new DriftClassParser(tableAuth)
    const driftClassTask = new DriftClassParser(tableTask)

    test('get table name', () => {

        assert.strictEqual(driftClassCategory.tableName, "Category")
        assert.strictEqual(driftClassAuth.tableName, "Auth")
        assert.strictEqual(driftClassTask.tableName, "Task")
    });


    test('get fields', () => {
        assert.deepStrictEqual(driftClassCategory.fields, [{name:"id", type: "Int"}, {name:"title", type: "Text"}])
        
        assert.deepStrictEqual(driftClassTask.fields, [
            {name:"id", type: "Int"}, 
            {name:"title", type: "Text"},
            {name:"description", type: "Text"}, 
            {name:"age", type: "Int"}
        
        ])
    });

});


