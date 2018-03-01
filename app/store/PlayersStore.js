Ext.define("iplinfo.store.PlayersStore", {
    extend: "Ext.data.Store",
    alias: "store.playersstore",
    fields: [
        "name", "age", "matches", "Team Name"
    ],
    proxy: {
        type: "rest",
        url: "app/data/players.json",
        reader: {
            type: "json",
            rootProperty: "players"
        }

    },
    autoLoad: true,
    groupField: "name"
});