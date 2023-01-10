import { createContext } from "react";

export const appContext = createContext(null);
export const pg_types = [
  "bytea",
  "char",
  "name",
  "int8",
  "int2",
  "int2vector",
  "int4",
  "regproc",
  "text",
  "oid",
  "tid",
  "xid",
  "cid",
  "oidvector",
  "pg_type",
  "pg_attribute",
  "pg_proc",
  "pg_class",
  "json",
  "xml",
  "pg_node_tree",
  "pg_ndistinct",
  "pg_dependencies",
  "pg_mcv_list",
  "pg_ddl_command",
  "point",
  "lseg",
  "path",
  "box",
  "polygon",
  "line",
  "float4",
  "float8",
  "unknown",
  "circle",
  "money",
  "macaddr",
  "inet",
  "cidr",
  "macaddr8",
  "aclitem",
  "bpchar",
  "varchar",
  "date",
  "time",
  "timestamp",
  "timestamptz",
  "interval",
  "timetz",
  "bit",
  "varbit",
  "numeric",
  "refcursor",
  "regprocedure",
  "regoper",
  "regoperator",
  "regclass",
  "regtype",
  "regrole",
  "regnamespace",
  "uuid",
  "pg_lsn",
  "tsvector",
  "gtsvector",
  "tsquery",
  "regconfig",
  "regdictionary",
  "jsonb",
  "jsonpath",
  "txid_snapshot",
  "int4range",
  "numrange",
  "tsrange",
  "tstzrange",
  "daterange",
  "int8range",
  "record",
  "cstring",
  "any",
  "anyarray",
  "void",
  "trigger",
  "event_trigger",
  "language_handler",
  "internal",
  "opaque",
  "anyelement",
  "anynonarray",
  "anyenum",
  "fdw_handler",
  "index_am_handler",
  "tsm_handler",
  "table_am_handler",
  "anyrange",
  "bool",
  "pg_attrdef",
  "pg_constraint",
  "pg_inherits",
  "pg_index",
  "pg_operator",
  "pg_opfamily",
  "pg_opclass",
  "pg_am",
  "pg_amop",
  "pg_amproc",
  "pg_language",
  "pg_largeobject_metadata",
  "pg_largeobject",
  "pg_aggregate",
  "pg_statistic_ext",
  "pg_statistic_ext_data",
  "pg_statistic",
  "pg_rewrite",
  "pg_trigger",
  "pg_event_trigger",
  "pg_description",
  "pg_cast",
  "pg_enum",
  "pg_namespace",
  "pg_conversion",
  "pg_depend",
  "pg_database",
  "pg_db_role_setting",
  "pg_tablespace",
  "pg_pltemplate",
  "pg_authid",
  "pg_auth_members",
  "pg_shdepend",
  "pg_shdescription",
  "pg_ts_config",
  "pg_ts_config_map",
  "pg_ts_dict",
  "pg_ts_parser",
  "pg_ts_template",
  "pg_extension",
  "pg_foreign_data_wrapper",
  "pg_foreign_server",
  "pg_user_mapping",
  "pg_foreign_table",
  "pg_policy",
  "pg_replication_origin",
  "pg_default_acl",
  "pg_init_privs",
  "pg_seclabel",
  "pg_shseclabel",
  "pg_collation",
  "pg_partitioned_table",
  "pg_range",
  "pg_transform",
  "pg_sequence",
  "pg_publication",
  "pg_publication_rel",
  "pg_subscription",
  "pg_subscription_rel",
  "pg_toast_2600",
  "pg_toast_2604",
  "pg_toast_3456",
  "pg_toast_2606",
  "pg_toast_826",
  "pg_toast_2609",
  "pg_toast_3466",
  "pg_toast_3079",
  "pg_toast_2328",
  "pg_toast_1417",
  "pg_toast_3118",
  "pg_toast_3394",
  "pg_toast_2612",
  "pg_toast_2615",
  "pg_toast_3350",
  "pg_toast_3256",
  "pg_toast_1255",
  "pg_toast_2618",
  "pg_toast_3596",
  "pg_toast_2619",
  "pg_toast_3381",
  "pg_toast_3429",
  "pg_toast_2620",
  "pg_toast_3600",
  "pg_toast_1247",
  "pg_toast_1418",
  "pg_toast_1260",
  "pg_toast_1262",
  "pg_toast_2964",
  "pg_toast_1136",
  "pg_toast_6000",
  "pg_toast_2396",
  "pg_toast_3592",
  "pg_toast_6100",
  "pg_toast_1213",
  "pg_roles",
  "pg_shadow",
  "pg_group",
  "pg_user",
  "pg_policies",
  "pg_rules",
  "pg_views",
  "pg_tables",
  "pg_matviews",
  "pg_indexes",
  "pg_sequences",
  "pg_stats",
  "pg_stats_ext",
  "pg_publication_tables",
  "pg_locks",
  "pg_cursors",
  "pg_available_extensions",
  "pg_available_extension_versions",
  "pg_prepared_xacts",
  "pg_prepared_statements",
  "pg_seclabels",
  "pg_settings",
  "pg_file_settings",
  "pg_hba_file_rules",
  "pg_timezone_abbrevs",
  "pg_timezone_names",
  "pg_config",
  "pg_stat_all_tables",
  "pg_stat_xact_all_tables",
  "pg_stat_sys_tables",
  "pg_stat_xact_sys_tables",
  "pg_stat_user_tables",
  "pg_stat_xact_user_tables",
  "pg_statio_all_tables",
  "pg_statio_sys_tables",
  "pg_statio_user_tables",
  "pg_stat_all_indexes",
  "pg_stat_sys_indexes",
  "pg_stat_user_indexes",
  "pg_statio_all_indexes",
  "pg_statio_sys_indexes",
  "pg_statio_user_indexes",
  "pg_statio_all_sequences",
  "pg_statio_sys_sequences",
  "pg_statio_user_sequences",
  "pg_stat_activity",
  "pg_stat_replication",
  "pg_stat_wal_receiver",
  "pg_stat_subscription",
  "pg_stat_ssl",
  "pg_stat_gssapi",
  "pg_replication_slots",
  "pg_stat_database",
  "pg_stat_database_conflicts",
  "pg_stat_user_functions",
  "pg_stat_xact_user_functions",
  "pg_stat_archiver",
  "pg_stat_bgwriter",
  "pg_stat_progress_vacuum",
  "pg_stat_progress_cluster",
  "pg_stat_progress_create_index",
  "pg_user_mappings",
  "pg_replication_origin_status",
  "customer_id_seq",
  "customer",
  "cardinal_number",
  "character_data",
  "sql_identifier",
  "information_schema_catalog_name",
  "time_stamp",
  "yes_or_no",
  "applicable_roles",
  "administrable_role_authorizations",
  "attributes",
  "character_sets",
  "check_constraint_routine_usage",
  "check_constraints",
  "collations",
  "collation_character_set_applicability",
  "column_column_usage",
  "column_domain_usage",
  "column_privileges",
  "column_udt_usage",
  "columns",
  "constraint_column_usage",
  "constraint_table_usage",
  "domain_constraints",
  "domain_udt_usage",
  "domains",
  "enabled_roles",
  "key_column_usage",
  "parameters",
  "referential_constraints",
  "role_column_grants",
  "routine_privileges",
  "role_routine_grants",
  "routines",
  "schemata",
  "sequences",
  "sql_features",
  "pg_toast_13308",
  "sql_implementation_info",
  "pg_toast_13313",
  "sql_languages",
  "pg_toast_13318",
  "sql_packages",
  "pg_toast_13323",
  "sql_parts",
  "pg_toast_13328",
  "sql_sizing",
  "pg_toast_13333",
  "sql_sizing_profiles",
  "pg_toast_13338",
  "table_constraints",
  "table_privileges",
  "role_table_grants",
  "tables",
  "transforms",
  "triggered_update_columns",
  "triggers",
  "udt_privileges",
  "role_udt_grants",
  "usage_privileges",
  "role_usage_grants",
  "user_defined_types",
  "view_column_usage",
  "view_routine_usage",
  "view_table_usage",
  "views",
  "data_type_privileges",
  "element_types",
  "pg_foreign_table_columns",
  "column_options",
  "pg_foreign_data_wrappers",
  "foreign_data_wrapper_options",
  "foreign_data_wrappers",
  "pg_foreign_servers",
  "foreign_server_options",
  "foreign_servers",
  "pg_foreign_tables",
  "foreign_table_options",
  "foreign_tables",
  "user_mapping_options",
  "user_mappings",
  "team_ova_seq",
  "team_att_seq",
  "team_mid_seq",
  "team_def_seq",
  "team",
];