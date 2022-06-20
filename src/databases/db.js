const database = {
    general: [
        { assetType: "API management service instance", abbreviation: "apim", charLength: { min: 1, max: 50 } },
        { assetType: "Managed Identity", abbreviation: "id", charLength: { min: 1, max: 24 } },
        { assetType: "Management group", abbreviation: "mg", businessUnit: true,  charLength: { min: 1, max: 24 } },
        { assetType: "Policy definition", abbreviation: "policy", charLength: { min: 1, max: 24 } },
        { assetType: "Resource group", abbreviation: "rg", charLength: { min: 1, max: 90 } },
        { assetType: "Subscription", abbreviation: "", businessUnit: true, subscriptionType: true } //<business unit>-<subscription type>-<###>
    ],
    networking: [
        { assetType: "Application gateway", abbreviation: "agw" },
        { assetType: "Application security group (ASG)", abbreviation: "asg", charLength: { min: 1, max: 80 } },
        { assetType: "Bastion", abbreviation: "bas" },
        { assetType: "CDN profile", abbreviation: "cdnp", charLength: { min: 1, max: 260 } },
        { assetType: "CDN endpoint", abbreviation: "cdne", charLength: { min: 1, max: 50 } },
        { assetType: "Connections", abbreviation: "con" },
        { assetType: "DNS", abbreviation: "dnsz" },
        { assetType: "DNS zone", abbreviation: "pdnsz" },
        { assetType: "Firewall", abbreviation: "afw", charLength: { min: 1, max: 80 } },
        { assetType: "Firewall policy", abbreviation: "afwp" },
        { assetType: "ExpressRoute circuit", abbreviation: "erc", charLength: { min: 1, max: 80 } },
        { assetType: "Front Door instance", abbreviation: "fd" },
        { assetType: "Front Door firewall policy", abbreviation: "fdfp" },
        { assetType: "Load balancer", abbreviation: "lb", charLength: { min: 1, max: 80 } },
        { assetType: "Load balancer (internal)", abbreviation: "lbi", charLength: { min: 1, max: 80 } },
        { assetType: "Load balancer (external)", abbreviation: "lbe", charLength: { min: 1, max: 80 } },
        { assetType: "Load balancer rule", abbreviation: "rule" },
        { assetType: "Local network gateway", abbreviation: "lgw" , subscriptionType: true },
        { assetType: "NAT gateway", abbreviation: "ng" },
        { assetType: "Network interface (NIC)", abbreviation: "nic", charLength: { min: 1, max: 80 } }, //nic-<##>-<vm name>-<subscription>-<###>
        { assetType: "Network security group (NSG)", abbreviation: "nsg", charLength: { min: 1, max: 80 } },
        { assetType: "Network security group (NSG) security rules", abbreviation: "nsgsr", charLength: { min: 1, max: 80 } },
        { assetType: "Network Watcher", abbreviation: "nw" },
        { assetType: "Private Link", abbreviation: "pl" },
        { assetType: "Public IP address", abbreviation: "pip", charLength: { min: 1, max: 80 } },
        { assetType: "Public IP address prefix", abbreviation: "ippre" },
        { assetType: "Route filter", abbreviation: "rf" },
        { assetType: "Route table", abbreviation: "rt" },
        { assetType: "Service endpoint", abbreviation: "se" },
        { assetType: "Site-to-Site connection", abbreviation: "cn" }, //cn-<local gateway name>-to-<virtual gateway name>
        { assetType: "VPN connection", abbreviation: "cn" }, //	cn-<subscription1>-<region1>-to-<subscription2>-<region2>
        { assetType: "Traffic Manager profile", abbreviation: "traf", charLength: { min: 1, max: 63 } },
        { assetType: "User defined route (UDR)", abbreviation: "udr" },
        { assetType: "Virtual network", abbreviation: "vnet", subscriptionType: true, charLength: { min: 2, max: 64 } },
        { assetType: "Virtual network peering", abbreviation: "peer", charLength: { min: 1, max: 80 } },
        { assetType: "Virtual network subnet", abbreviation: "snet", charLength: { min: 1, max: 80 } },
        { assetType: "Virtual WAN", abbreviation: "vwan" },
        { assetType: "VPN Gateway", abbreviation: "vpng" },
        { assetType: "VPN Connection", abbreviation: "vcn" },
        { assetType: "VPN site", abbreviation: "vst" },
        { assetType: "Virtual network gateway", abbreviation: "vgw" , subscriptionType: true },
        { assetType: "Web Application Firewall (WAF) policy", abbreviation: "waf" },
        { assetType: "Web Application Firewall (WAF) policy rule group", abbreviation: "wafrg" }
    ],
    computeAndWeb: [
        { assetType: "App Service environment", abbreviation: "ase" },
        { assetType: "App Service plan", abbreviation: "plan" },
        { assetType: "Availability set", abbreviation: "avail", charLength: { min: 1, max: 80 } },
        { assetType: "Azure Arc enabled server", abbreviation: "arcs" },
        { assetType: "Azure Arc enabled Kubernetes cluster", abbreviation: "arck" },
        { assetType: "Cloud service", abbreviation: "cld", fullRegex: true, charLength: { min: 1, max: 15 } },
        { assetType: "Disk encryption set", abbreviation: "des", charLength: { min: 1, max: 80 } },
        { assetType: "Function app", abbreviation: "func" },
        { assetType: "Gallery", abbreviation: "gal", nohyphen: true, charLength: { min: 1, max: 80 } },
        { assetType: "Managed disk (OS)", abbreviation: "osdisk", charLength: { min: 1, max: 80 } },
        { assetType: "Managed disk (data)", abbreviation: "disk", charLength: { min: 1, max: 80 } },
        { assetType: "Notification Hubs", abbreviation: "ntf", charLength: { min: 1, max: 50 } },
        { assetType: "Notification Hubs namespace", abbreviation: "ntfns", charLength: { min: 1, max: 50 } },
        { assetType: "Snapshot", abbreviation: "snap" },
        { assetType: "Static web app", abbreviation: "stapp" },
        { assetType: "Virtual machine", abbreviation: "vm", fullRegex: true, charLength: { min: 1, max: 15 } }, //Se for Linux eh 1-64 o CharLength
        { assetType: "Virtual machine scale set", abbreviation: "vmss", fullRegex: true, charLength: { min: 1, max: 15 } }, //Se for Linux eh 1-64 o CharLength
        { assetType: "VM storage account", abbreviation: "stvm" }, //stvm<performance type><app name or prod name><region><###>
        { assetType: "Web app", abbreviation: "app" } //
    ],
    containers: [
        { assetType: "AKS cluster", abbreviation: "aks" },
        { assetType: "Container registry", abbreviation: "cr", charLength: { min: 5, max: 50 }, nohyphen: true },
        { assetType: "Container instance", abbreviation: "ci" },
        { assetType: "Service Fabric cluster", abbreviation: "sf" }
    ],
    databases: [
        { assetType: "Azure Cosmos DB database", abbreviation: "cosmos" },
        { assetType: "Azure Cache for Redis instance", abbreviation: "redis", charLength: { min: 1, max: 63 } },
        { assetType: "Azure SQL Database server", abbreviation: "sql" },
        { assetType: "Azure SQL database", abbreviation: "sqldb" },
        { assetType: "Azure Synapse Analytics", abbreviation: "syn" },
        { assetType: "Azure Synapse Analytics Workspaces", abbreviation: "synw" },
        { assetType: "Azure Synapse Analytics SQL Dedicated Pool", abbreviation: "syndp" },
        { assetType: "Azure Synapse Analytics Spark Pool", abbreviation: "dynsp" },
        { assetType: "MySQL database", abbreviation: "mysql" },
        { assetType: "PostgreSQL database", abbreviation: "psql" },
        { assetType: "SQL Server Stretch Database", abbreviation: "sqlstrdb" },
        { assetType: "SQL Managed Instance", abbreviation: "sqlmi" }
    ],
    storage: [
        { assetType: "Storage account (general use)", abbreviation: "st", nohyphen: true, fullRegex: true, charLength: { min: 3, max: 24 } },
        { assetType: "Storage account (diagnostic logs)", abbreviation: "stdiag", nohyphen: true, fullRegex: true, charLength: { min: 3, max: 24 } }, //stdiag<first 2 letters of subscription name and number><region><###>
        { assetType: "Azure Container Registry", abbreviation: "cr" , nohyphen: true }, 
        { assetType: "Azure StorSimple", abbreviation: "ssimp" }
    ],
    aiAndMachineLearning: [
        { assetType: "Azure Cognitive Search", abbreviation: "srch" },
        { assetType: "Azure Cognitive Services", abbreviation: "cog" },
        { assetType: "Azure Machine Learning workspace", abbreviation: "mlw" }
    ],
    analyticsAndIoT: [
        { assetType: "Azure Analysis Services server", abbreviation: "as" },
        { assetType: "Azure Databricks workspace", abbreviation: "dbw" },
        { assetType: "Azure Stream Analytics", abbreviation: "asa" },
        { assetType: "Azure Data Explorer cluster", abbreviation: "dec" },
        { assetType: "Azure Data Explorer cluster database", abbreviation: "dedb" },
        { assetType: "Azure Data Factory", abbreviation: "adf", charLength: { min: 3, max: 63 } },
        { assetType: "Data Lake Store account", abbreviation: "dls" , nohyphen: true },
        { assetType: "Data Lake Analytics account", abbreviation: "dla" , nohyphen: true },
        { assetType: "Event Hubs namespace", abbreviation: "evhns", charLength: { min: 1, max: 50 } },
        { assetType: "Event hub", abbreviation: "evh" },
        { assetType: "Event Grid domain", abbreviation: "evgd" },
        { assetType: "Event Grid subscriptions", abbreviation: "evgs" },
        { assetType: "Event Grid topic", abbreviation: "evgt" },
        { assetType: "HDInsight - Hadoop cluster", abbreviation: "hadoop" },
        { assetType: "HDInsight - HBase cluster", abbreviation: "hbase" },
        { assetType: "HDInsight - Kafka cluster", abbreviation: "kafka" },
        { assetType: "HDInsight - Spark cluster", abbreviation: "spark" },
        { assetType: "HDInsight - Storm cluster", abbreviation: "storm" },
        { assetType: "HDInsight - ML Services cluster", abbreviation: "mls" },
        { assetType: "IoT hub", abbreviation: "iot" },
        { assetType: "Provisioning services", abbreviation: "provs" },
        { assetType: "Provisioning services certificate", abbreviation: "pcert" },
        { assetType: "Power BI Embedded", abbreviation: "pbi" },
        { assetType: "Time Series Insights environment", abbreviation: "tsi" }
    ],
    azureVirtualDesktop: [
        { assetType: "Virtual desktop host pool", abbreviation: "vdpool" },
        { assetType: "Virtual desktop application group", abbreviation: "vdag" },
        { assetType: "Virtual desktop workspace", abbreviation: "vdws" }
    ],
    devTools: [
        { assetType: "App Configuration store", abbreviation: "appcs", charLength: { min: 5, max: 50 } },
        { assetType: "SignalR", abbreviation: "sigr" }
    ],
    integration: [
        { assetType: "Integration account", abbreviation: "ia" },
        { assetType: "Logic apps", abbreviation: "logic" },
        { assetType: "Service Bus", abbreviation: "sb" },
        { assetType: "Service Bus queue", abbreviation: "sbq", charLength: { min: 3, max: 63 } }, //sbq-<query descriptor>
        { assetType: "Service Bus topic", abbreviation: "sbt" } //sbt-<query descriptor>
    ],
    managementAndGovernance: [
        { assetType: "Automation account", abbreviation: "aa", charLength: { min: 6, max: 50 } },
        { assetType: "Application Insights", abbreviation: "appi" },
        { assetType: "Azure Monitor action group", abbreviation: "ag" },
        { assetType: "Azure Purview instance", abbreviation: "pview" },
        { assetType: "Blueprint", abbreviation: "bp", charLength: { min: 1, max: 90 } },
        { assetType: "Blueprint assignment", abbreviation: "bpa", charLength: { min: 1, max: 90 } },
        { assetType: "Key vault", abbreviation: "kv" },
        { assetType: "Log Analytics workspace", abbreviation: "log" }
    ],
    migration: [
        { assetType: "Azure Migrate project", abbreviation: "migr" },
        { assetType: "Database Migration Service instance", abbreviation: "dms" },
        { assetType: "Recovery Services vault", abbreviation: "rsv", charLength: { min: 2, max: 50 } }
    ],
    deprecatedProductName: [
        { assetType: "Azure SQL Data Warehouse", abbreviation: "sqldw" }
    ]
}

export default database