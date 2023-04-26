module.exports = (sequelize, DataType) => {
    const Employees = sequelize.define("Employees", {
        firstName: {
            type: DataType.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataType.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataType.STRING,
            allowNull: false,
        },
        birthDate: {
            type: DataType.DATE,
            allowNull: false,
        }
    });

    return Employees;
};