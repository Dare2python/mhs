const Connection = {
    connection: null,
    connect: () => {
        Connection.connection = "connected";
    }
};

module.exports = Connection;
