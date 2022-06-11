const database = {
    general: [
        { assetType: "API management service instance", abbreviation: "apim", charLenght: {min: 1, max: 50} }, //apim-<app or service name>
        { assetType: "Managed Identity", abbreviation: "id", charLenght: {min: 1, max: 24} }, 
        { assetType: "Management group", abbreviation: "mg", charLenght: {min: 1, max: 24} }, //mg-<business unit>[-<environment type>]
        { assetType: "Policy definition", abbreviation: "policy", charLenght: {min: 1, max: 24} },
        { assetType: "Resource group", abbreviation: "rg", charLenght: {min: 1, max: 90} }, //rg-<app or service name>-<subscription type>-<###>
        { assetType: "Subscription", abbreviation: "" , } //<business unit>-<subscription type>-<###>
    ],
    networking: [
        { assetType: "Application gateway", abbreviation: "agw" },
        { assetType: "Application security group (ASG)", abbreviation: "asg", charLenght: {min: 1, max: 80} },
        { assetType: "Bastion", abbreviation: "bas" },
        { assetType: "CDN profile", abbreviation: "cdnp" , charLenght: {min: 1, max: 260} },
        { assetType: "CDN endpoint", abbreviation: "cdne" , charLenght: {min: 1, max: 50} },
        { assetType: "Connections", abbreviation: "con" },
        { assetType: "DNS", abbreviation: "dnsz" },
        { assetType: "DNS zone", abbreviation: "pdnsz" },
        { assetType: "Firewall", abbreviation: "afw", charLenght: {min: 1, max: 80} },
        { assetType: "Firewall policy", abbreviation: "afwp" },
        { assetType: "ExpressRoute circuit", abbreviation: "erc", charLenght: {min: 1, max: 80} },
        { assetType: "Front Door instance", abbreviation: "fd" },
        { assetType: "Front Door firewall policy", abbreviation: "fdfp" },
        { assetType: "Load balancer", abbreviation: "lb", charLenght: {min: 1, max: 80} }, //lb-<app name or role>-<environment>-<###>
        { assetType: "Load balancer (internal)", abbreviation: "lbi", charLenght: {min: 1, max: 80} },
        { assetType: "Load balancer (external)", abbreviation: "lbe", charLenght: {min: 1, max: 80} },
        { assetType: "Load balancer rule", abbreviation: "rule" },
        { assetType: "Local network gateway", abbreviation: "lgw" }, //lgw-<subscription type>-<region>-<###>
        { assetType: "NAT gateway", abbreviation: "ng" },
        { assetType: "Network interface (NIC)", abbreviation: "nic", charLenght: {min: 1, max: 80}  }, //nic-<##>-<vm name>-<subscription>-<###>
        { assetType: "Network security group (NSG)", abbreviation: "nsg", charLenght: {min: 1, max: 80} }, //nsg-<policy name or app name>-<###>
        { assetType: "Network security group (NSG) security rules", abbreviation: "nsgsr", charLenght: {min: 1, max: 80} },
        { assetType: "Network Watcher", abbreviation: "nw" },
        { assetType: "Private Link", abbreviation: "pl" },
        { assetType: "Public IP address", abbreviation: "pip", charLenght: {min: 1, max: 80} }, //pip-<vm name or app name>-<environment>-<region>-<###>
        { assetType: "Public IP address prefix", abbreviation: "ippre" },
        { assetType: "Route filter", abbreviation: "rf" },
        { assetType: "Route table", abbreviation: "rt" }, //rt-<route table name>
        { assetType: "Service endpoint", abbreviation: "se" },
        { assetType: "Site-to-Site connection", abbreviation: "cn" }, //cn-<local gateway name>-to-<virtual gateway name>
        { assetType: "VPN connection", abbreviation: "cn" }, //	cn-<subscription1>-<region1>-to-<subscription2>-<region2>-
        { assetType: "Traffic Manager profile", abbreviation: "traf", charLenght: {min: 1, max: 63} },
        { assetType: "User defined route (UDR)", abbreviation: "udr" },
        { assetType: "Virtual network", abbreviation: "vnet", charLenght: {min: 2, max: 64}  }, //vnet-<subscription type>-<region>-<###>
        { assetType: "Virtual network peering", abbreviation: "peer", charLenght: {min: 1, max: 80} },
        { assetType: "Virtual network subnet", abbreviation: "snet", charLenght: {min: 1, max: 80}  }, //snet-<subscription>-<region>-<###>
        { assetType: "Virtual WAN", abbreviation: "vwan" },
        { assetType: "VPN Gateway", abbreviation: "vpng" },
        { assetType: "VPN connection", abbreviation: "vcn" },
        { assetType: "VPN site", abbreviation: "vst" },
        { assetType: "Virtual network gateway", abbreviation: "vgw" }, //vgw-<subscription type>-<region>-<###>
        { assetType: "Web Application Firewall (WAF) policy", abbreviation: "waf" },
        { assetType: "Web Application Firewall (WAF) policy rule group", abbreviation: "wafrg" }
    ],
    computeAndWeb: [
        { assetType: "App Service environment", abbreviation: "ase" },
        { assetType: "App Service plan", abbreviation: "plan" },
        { assetType: "Availability set", abbreviation: "avail", charLenght: {min: 1, max: 80} },
        { assetType: "Azure Arc enabled server", abbreviation: "arcs" },
        { assetType: "Azure Arc enabled Kubernetes cluster", abbreviation: "arck" },
        { assetType: "Cloud service", abbreviation: "cld", fullRegex: true, charLenght: {min: 1, max: 15} }, //cld-<app name>-<environment>-<region><###>
        { assetType: "Disk encryption set", abbreviation: "des", charLenght: {min: 1, max: 80} },
        { assetType: "Function app", abbreviation: "func" }, //func-<app name>-<environment>-<region>-<###>
        { assetType: "Gallery", abbreviation: "gal", nohyphen: true, charLenght: {min: 1, max: 80} },
        { assetType: "Managed disk (OS)", abbreviation: "osdisk", charLenght: {min: 1, max: 80} },
        { assetType: "Managed disk (data)", abbreviation: "disk", charLenght: {min: 1, max: 80} },
        { assetType: "Notification Hubs", abbreviation: "ntf", charLenght: {min: 1, max: 50} }, //ntf-<app name>-<environment>
        { assetType: "Notification Hubs namespace", abbreviation: "ntfns", charLenght: {min: 1, max: 50} }, //ntfns-<app name>-<environment>
        { assetType: "Snapshot", abbreviation: "snap" },
        { assetType: "Static web app", abbreviation: "stapp" },
        { assetType: "Virtual machine", abbreviation: "vm", fullRegex: true, nohyphen: true, charLenght: {min: 1, max: 15} }, //vm<policy name or app name><###> Se for Linux eh 1-64 o CharLenght
        { assetType: "Virtual machine scale set", abbreviation: "vmss" , fullRegex: true, nohyphen: true, charLenght: {min: 1, max: 15} }, //Se for Linux eh 1-64 o CharLenght
        { assetType: "VM storage account", abbreviation: "stvm" }, //stvm<performance type><app name or prod name><region><###>
        { assetType: "Web app", abbreviation: "app" } //app-<app name>-<region>-<environment>-<###>
    ],
    containers: [
        { assetType: "AKS cluster", abbreviation: "aks" },
        { assetType: "Container registry", abbreviation: "cr", charLenght: {min: 5, max: 50}, nohyphen: true },
        { assetType: "Container instance", abbreviation: "ci" },
        { assetType: "Service Fabric cluster", abbreviation: "sf" }
    ],
    databases: [
        { assetType: "Azure Cosmos DB database", abbreviation: "cosmos" }, //cosmos-<app name>-<environment>
        { assetType: "Azure Cache for Redis instance", abbreviation: "redis", charLenght: {min: 1, max: 63} }, //redis-<app name>-<environment>
        { assetType: "Azure SQL Database server", abbreviation: "sql" }, //sql-<app name>-<environment>
        { assetType: "Azure SQL database", abbreviation: "sqldb" }, //sqldb-<database name>-<environment>
        { assetType: "Azure Synapse Analytics", abbreviation: "syn" }, //syn-<app name>-<environment>
        { assetType: "Azure Synapse Analytics Workspaces", abbreviation: "synw" },
        { assetType: "Azure Synapse Analytics SQL Dedicated Pool", abbreviation: "syndp" },
        { assetType: "Azure Synapse Analytics Spark Pool", abbreviation: "dynsp" },
        { assetType: "MySQL database", abbreviation: "mysql" }, //mysql-<app name>-<environment>
        { assetType: "PostgreSQL database", abbreviation: "psql" }, //psql-<app name>-<environment>
        { assetType: "SQL Server Stretch Database", abbreviation: "sqlstrdb" },
        { assetType: "SQL Managed Instance", abbreviation: "sqlmi" }
    ],
    storage: [
        { assetType: "Storage account (general use)", abbreviation: "st", fullRegex:true, charLenght: {min:3, max:24} }, //st<storage name><###>
        { assetType: "Storage account (diagnostic logs)", abbreviation: "stdiag", fullRegex:true, charLenght: {min:3, max:24} }, //stdiag<first 2 letters of subscription name and number><region><###>
        { assetType: "Azure Container Registry", abbreviation: "cr" }, //cr<app name><environment><###>
        { assetType: "Azure StorSimple", abbreviation: "ssimp" } //ssimp<app name>-<environment>
    ],
    aiAndMachineLearning: [
        { assetType: "Azure Cognitive Search", abbreviation: "srch" }, //srch-<app name>-<environment>
        { assetType: "Azure Cognitive Services", abbreviation: "cog" }, //cog-<app name>-<environment>
        { assetType: "Azure Machine Learning workspace", abbreviation: "mlw" } //mlw-<app name>-<environment>
    ],
    analyticsAndIoT: [
        { assetType: "Azure Analysis Services server", abbreviation: "as" },
        { assetType: "Azure Databricks workspace", abbreviation: "dbw" },
        { assetType: "Azure Stream Analytics", abbreviation: "asa" }, //asa-<app name>-<environment>
        { assetType: "Azure Data Explorer cluster", abbreviation: "dec" },
        { assetType: "Azure Data Explorer cluster database", abbreviation: "dedb" },
        { assetType: "Azure Data Factory", abbreviation: "adf", charLenght: {min: 3, max: 63} }, //adf-<app name>-<environment>
        { assetType: "Data Lake Store account", abbreviation: "dls" }, //dls<app name><environment>
        { assetType: "Data Lake Analytics account", abbreviation: "dla" }, //dla<app name><environment>
        { assetType: "Event Hubs namespace", abbreviation: "evhns", charLenght: {min: 1, max: 50} },
        { assetType: "Event hub", abbreviation: "evh" }, //evh-<app name>-<environment>
        { assetType: "Event Grid domain", abbreviation: "evgd" },
        { assetType: "Event Grid subscriptions", abbreviation: "evgs" },
        { assetType: "Event Grid topic", abbreviation: "evgt" },
        { assetType: "HDInsight - Hadoop cluster", abbreviation: "hadoop" }, //hadoop-<app name>-<environment>
        { assetType: "HDInsight - HBase cluster", abbreviation: "hbase" }, //hbase-<app name>-<environment>
        { assetType: "HDInsight - Kafka cluster", abbreviation: "kafka" },
        { assetType: "HDInsight - Spark cluster", abbreviation: "spark" }, //spark-<app name>-<environment>
        { assetType: "HDInsight - Storm cluster", abbreviation: "storm" },
        { assetType: "HDInsight - ML Services cluster", abbreviation: "mls" },
        { assetType: "IoT hub", abbreviation: "iot" }, //iot-<app name>-<environment>
        { assetType: "Provisioning services", abbreviation: "provs" },
        { assetType: "Provisioning services certificate", abbreviation: "pcert" },
        { assetType: "Power BI Embedded", abbreviation: "pbi" }, //pbi-<app name>-<environment>
        { assetType: "Time Series Insights environment", abbreviation: "tsi" }
    ],
    azureVirtualDesktop: [
        { assetType: "Virtual desktop host pool", abbreviation: "vdpool" },
        { assetType: "Virtual desktop application group", abbreviation: "vdag" },
        { assetType: "Virtual desktop workspace", abbreviation: "vdws" }
    ],
    devTools: [
        { assetType: "App Configuration store", abbreviation: "appcs", charLenght: {min: 5, max: 50} },
        { assetType: "SignalR", abbreviation: "sigr" }
    ],
    integration: [
        { assetType: "Integration account", abbreviation: "ia" },
        { assetType: "Logic apps", abbreviation: "logic" },
        { assetType: "Service Bus", abbreviation: "sb" }, //sb-<app name>-<environment>.servicebus.windows.net
        { assetType: "Service Bus queue", abbreviation: "sbq", charLenght: {min: 3, max: 63} }, //sbq-<query descriptor>
        { assetType: "Service Bus topic", abbreviation: "sbt" } //sbt-<query descriptor>
    ],
    managementAndGovernance: [
        { assetType: "Automation account", abbreviation: "aa", charLenght: {min: 6, max: 50} },
        { assetType: "Application Insights", abbreviation: "appi" },
        { assetType: "Azure Monitor action group", abbreviation: "ag" },
        { assetType: "Azure Purview instance", abbreviation: "pview" },
        { assetType: "Blueprint", abbreviation: "bp" , charLenght: {min: 1, max: 90} }, 
        { assetType: "Blueprint assignment", abbreviation: "bpa", charLenght: {min: 1, max: 90} },
        { assetType: "Key vault", abbreviation: "kv" },
        { assetType: "Log Analytics workspace", abbreviation: "log" }
    ],
    migration: [
        { assetType: "Azure Migrate project", abbreviation: "migr" },
        { assetType: "Database Migration Service instance", abbreviation: "dms" },
        { assetType: "Recovery Services vault", abbreviation: "rsv", charLenght: {min: 2, max: 50} }
    ],
    deprecatedProductName: [
        { assetType: "Azure SQL Data Warehouse", abbreviation: "sqldw" }
    ]
}

export default database