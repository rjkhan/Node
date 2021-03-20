module.exports = (sequelize, Sequelize) => {

    const Person = sequelize.define("person",{

        first_name : {
            type: Sequelize.STRING
        },
        last_name : {
            type: Sequelize.STRING
        },
        age : {
            type: Sequelize.INTEGER
        }
    });
    return Person;
};