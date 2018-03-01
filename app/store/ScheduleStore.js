Ext.define("iplinfo.store.ScheduleStore", {
    extend: "Ext.data.Store",
    alias: "store.schedulestore",
    storeId: "schedulestore",
    fields: [
        'date', 'match', 'venue', 'time', 'result'
    ],

    proxy: {
        type: "rest",
        url: "app/data/schedule.json",
        reader: {
            type: "json",
            rootProperty: "schedule"
        }
    },
    autoLoad: true,
    // groupField:"match"


}); 