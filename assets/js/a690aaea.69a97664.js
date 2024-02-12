"use strict";(self.webpackChunkdebcrafter_docs=self.webpackChunkdebcrafter_docs||[]).push([[8534],{5788:(e,a,t)=>{t.d(a,{Iu:()=>c,yg:()=>m});var n=t(1504);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),p=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(o.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=i,m=u["".concat(o,".").concat(d)]||u[d]||g[d]||r;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function m(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=d;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[u]="string"==typeof e?e:i,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5224:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(5072),i=(t(1504),t(5788));const r={},s="Service Only fields",l={unversionedId:"package-specification/sps/service-fields",id:"package-specification/sps/service-fields",title:"Service Only fields",description:"Service package example",source:"@site/docs/06-package-specification/02-sps/05-service-fields.md",sourceDirName:"06-package-specification/02-sps",slug:"/package-specification/sps/service-fields",permalink:"/debcrafter-docs/docs/package-specification/sps/service-fields",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/06-package-specification/02-sps/05-service-fields.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Only fields",permalink:"/debcrafter-docs/docs/package-specification/sps/basic-fields"},next:{title:"ConfExt Only fields",permalink:"/debcrafter-docs/docs/package-specification/sps/conf-ext-fields"}},o={},p=[{value:"Service package example",id:"service-package-example",level:2},{value:"after",id:"after",level:2},{value:"bare_conf_param",id:"bare_conf_param",level:2},{value:"bin_package",id:"bin_package",level:2},{value:"binds_to",id:"binds_to",level:2},{value:"binary",id:"binary",level:2},{value:"condition_path_exists",id:"condition_path_exists",level:2},{value:"conf_d",id:"conf_d",level:2},{value:"conf_param",id:"conf_param",level:2},{value:"exec_stop",id:"exec_stop",level:2},{value:"extra_groups",id:"extra_groups",level:2},{value:"extra_service_config",id:"extra_service_config",level:2},{value:"part_of",id:"part_of",level:2},{value:"refuse_manual_start",id:"refuse_manual_start",level:2},{value:"refuse_manual_stop",id:"refuse_manual_stop",level:2},{value:"requires",id:"requires",level:2},{value:"runtime_dir",id:"runtime_dir",level:2},{value:"service_type",id:"service_type",level:2},{value:"user",id:"user",level:2},{value:"wanted_by",id:"wanted_by",level:2},{value:"wants",id:"wants",level:2}],c={toc:p},u="wrapper";function g(e){let{components:a,...t}=e;return(0,i.yg)(u,(0,n.c)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"service-only-fields"},"Service Only fields"),(0,i.yg)("h2",{id:"service-package-example"},"Service package example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'name = "linuxutil-service"\nsummary = "Systemd Service for Linux Utility Scripts"\nconflicts = []\ndepends = ["linuxutil"]\nlong_doc = """\nThe \'linuxutil-service\' package provides a systemd service configuration for the \'linuxutil\' package, which is a collection of useful utility scripts for managing and monitoring Linux systems.\n\nThis package defines a systemd service called \'linuxutil-service\' that ensures the \'linuxutil\' scripts are properly managed and executed as a system service.\n\nNote: This is a fictional package for demonstration purposes.\n"""\nadd_dirs = []\nadd_files = []\nadd_links = []\nadd_manpages = []\nmin_patch = ""\nprovides = []\nrecommends = []\nsuggests = []\npatch_foreign = {}\n\n# Service Fields\nafter = "multi-user.target"\nbin_package = ""\nbare_conf_param = false\nbin_package = ""\nbinds_to = ""\nbinary = ""\ncondition_path_exists = ""\nconf_d = {}\nconf_param = []\nexec_stop = ""\nextra_groups = {}\nextra_service_config = """\nExecStart=/usr/bin/linuxutil-script\nRestart=always\n"""\npart_of = ""\nrefuse_manual_start = false\nrefuse_manual_stop = false\nrequires = []\nruntime_dir = {}\nservice_type = "simple"\nuser = {}\nwanted_by = "multi-user.target"\nwants = "linuxutil"\n\n')),(0,i.yg)("h2",{id:"after"},"after"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: TemplateString"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'after = "postgresql.service"\n'))),(0,i.yg)("li",{parentName:"ul"},"Variant example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'after = "lnd-system-{variant}.service"\n')))),(0,i.yg)("p",null,'In systemd service unit files, the "after" field defines a dependency relationship, specifying a target service or unit that the current package must start after. This ensures that the package waits for the specified service or unit to commence before it begins its own execution.'),(0,i.yg)("h2",{id:"bare_conf_param"},"bare_conf_param"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: boolean"),(0,i.yg)("li",{parentName:"ul"},"Conflicts with: conf_param"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},"bare_conf_param = true\n")))),(0,i.yg)("p",null,"If ",(0,i.yg)("inlineCode",{parentName:"p"},"bare_conf_param")," is true, it means the application must be launched as ",(0,i.yg)("inlineCode",{parentName:"p"},"/bin/foo /etc/foo/foo.conf"),". Where foo is the package name."),(0,i.yg)("h2",{id:"bin_package"},"bin_package"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: String"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'bin_package = "python3-remir"\n')))),(0,i.yg)("p",null,"TODO"),(0,i.yg)("h2",{id:"binds_to"},"binds_to"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: TemplateString"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'binds_to = "lnd-system.service"\n'))),(0,i.yg)("li",{parentName:"ul"},"Variant example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'binds_to = "lnd-system-{variant}.service"\n')))),(0,i.yg)("p",null,'The "binds_to" field specifies a target service or unit that the current package should be bound to. It establishes a relationship where the package should be started and stopped together with the specified service or unit.'),(0,i.yg)("h2",{id:"binary"},"binary"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: String"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'binary = "/usr/bin/remir"\n')))),(0,i.yg)("p",null,'The "binary" field specifies the path to the binary executable associated with the package. It indicates the location of the main executable file that the package provides or relies on. This field is essential for identifying the primary executable within the package.'),(0,i.yg)("h2",{id:"condition_path_exists"},"condition_path_exists"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: TemplateString"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'condition_path_exists="!/etc/selfhost/deactivate-selfhost-dashboard"\n')))),(0,i.yg)("p",null,'The "condition_path_exists" field specifies a condition that needs to be met for the package to be installed or configured. It uses a TemplateString to define a path condition that checks for the existence or non-existence of a specific file or directory. Depending on the condition, the package installation or configuration may proceed or be skipped.'),(0,i.yg)("h2",{id:"conf_d"},"conf_d"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: ConfDir"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'conf_d = { name = "conf.d", param = "--conf-dir" }\n')))),(0,i.yg)("p",null,'conf_d specifies the name of the parameter used to load configuration from a directory by reading each file of the directory.\nIf a service is capable of it and accepts e.g. --conf-dir /etc/foo/conf.d then use conf_d = "--conf-dir"\nThen the service will read each file from the conf dir and use its content to modify configuration.\nBy convention these directories are named with ".d" suffix. This is very useful to enable multiple packages or the user to affect the configuration without conflicts or complicated file editing.'),(0,i.yg)("p",null,"Note: This directory can be filled with confext package content."),(0,i.yg)("h2",{id:"conf_param"},"conf_param"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: ConfParam"),(0,i.yg)("li",{parentName:"ul"},"Conflicts with: bare_conf_param"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'conf_param = "--conf"\nconf_param = "--conf="\n')))),(0,i.yg)("p",null,"conf_param specifies the name of the argument used to supply the configuration file to the service."),(0,i.yg)("p",null,'So if the service needs to be launched with /bin/foo --config /etc/foo/foo.conf you specify conf_param = "--config" and then write ','[config."foo.conf"]'," below"),(0,i.yg)("h2",{id:"exec_stop"},"exec_stop"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: String"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'exec_stop = "/bin/true"\n')))),(0,i.yg)("p",null,'The "exec_stop" field specifies the command or script that should be executed when stopping the service associated with the package. It defines the action to be taken when the service is stopped, such as running a specific command or script. This field is used to control the behavior of the service during the stop process.'),(0,i.yg)("h2",{id:"extra_groups"},"extra_groups"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Type: Map of TemplateString to ExtraGroup")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'[extra_groups."lnd-system"]\ncreate = false\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Variant example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'[extra_groups."lnd-system-{variant}"]\ncreate = false\n')))),(0,i.yg)("p",null,'The "extra_groups" field specifies additional groups that should be created or configured as part of the package installation process. It uses a map where each key is a TemplateString representing the group name, and each value is an ExtraGroup type that defines the group\'s configuration, including whether it should be created or not.'),(0,i.yg)("p",null,"The Service user will be added to these groups by debcrafter."),(0,i.yg)("h2",{id:"extra_service_config"},"extra_service_config"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: TemplateString"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'extra_service_config = """\nRestart=always\n"""\n'))),(0,i.yg)("li",{parentName:"ul"},"Variant example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'extra_service_config = """\nEnvironment="BITCOIN_NETWORK={variant}"\nRemainAfterExit=true\n"""\n')))),(0,i.yg)("p",null,'The "extra_service_config" field allows you to specify additional configuration options for the systemd service associated with the package. It uses a TemplateString to define custom systemd service configuration settings. These settings can include directives that control how the service behaves, environment variables, and more.'),(0,i.yg)("h2",{id:"part_of"},"part_of"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Type: TemplateString")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'part_of = "lnd-system.service"\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Variant example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'part_of = "lnd-system-{variant}.service"\n')))),(0,i.yg)("p",null,'The "part_of" field specifies that the current package is considered a part of another systemd service in another package, indicating a dependency relationship. It uses a TemplateString to define the name of the service to which the package is considered a part. This field ensures that the package is treated as a component of the specified service.'),(0,i.yg)("h2",{id:"refuse_manual_start"},"refuse_manual_start"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: bool"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},"refuse_manual_start = true\n")))),(0,i.yg)("p",null,'The "refuse_manual_start" field is a boolean flag that, when set to true, indicates that the package should not be started manually by users or administrators. It prevents manual initiation of the associated service using commands like systemctl start or similar. This flag is used to enforce automatic startup behavior or to prevent unintentional manual starts.'),(0,i.yg)("h2",{id:"refuse_manual_stop"},"refuse_manual_stop"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: bool"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},"refuse_manual_stop = true\n")))),(0,i.yg)("p",null,'The "refuse_manual_stop" field is a boolean flag that, when set to true, indicates that the package should not be stopped manually by users or administrators. It prevents manual termination of the associated service using commands like systemctl stop or similar. This flag is used to enforce automatic stop behavior or to prevent unintentional manual stops.'),(0,i.yg)("h2",{id:"requires"},"requires"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Type: TemplateString")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'requires = ["service"]\n\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Variant example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'requires = ["service-{variant}"]\n\n')))),(0,i.yg)("p",null,'The "requires" field in System.d configuration is used to specify dependencies on other services or units that the current service or unit relies on. This field defines a relationship between services or units, ensuring that the current one only starts if the required services or units are also started. This helps in managing service dependencies and the order in which services or units are started.'),(0,i.yg)("p",null,"The field takes a list of TemplateStrings, which can specify the names of required services or units. These are service or unit names that the current service or unit depends on."),(0,i.yg)("h2",{id:"runtime_dir"},"runtime_dir"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Type: RuntimeDir")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'runtime_dir = { mode = "750" }\n')))),(0,i.yg)("p",null,'The "runtime_dir" field specifies the configuration for creating a runtime directory associated with the package. It uses the RuntimeDir type to define the configuration, including the directory\'s mode. Runtime directories are typically used to store temporary or runtime data for a service or application.'),(0,i.yg)("p",null,"runtime_dir is deleted whenever the service stops and is placed in ",(0,i.yg)("inlineCode",{parentName:"p"},"/var/run")),(0,i.yg)("h2",{id:"service_type"},"service_type"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: String"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'service_type = "notify"\n')))),(0,i.yg)("p",null,'The "service_type" field specifies the type of systemd service that is associated with the package. It defines the behavior and characteristics of the systemd service. The allowed values for the "service_type" field include:'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'"simple": Indicates a basic systemd service that does not provide notifications or special features.'),(0,i.yg)("li",{parentName:"ul"},'"forking": Indicates a systemd service that forks itself into the background during startup.'),(0,i.yg)("li",{parentName:"ul"},'"oneshot": Indicates a systemd service that is designed to be executed once and then exit.'),(0,i.yg)("li",{parentName:"ul"},'"dbus": Indicates a systemd service that communicates with D-Bus for activation.'),(0,i.yg)("li",{parentName:"ul"},'"notify": Indicates a systemd service that sends a notification to systemd when it is ready to accept connections.')),(0,i.yg)("h2",{id:"user"},"user"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: UserSpec"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},"user = { group = true, create = { home = false } }\n"))),(0,i.yg)("li",{parentName:"ul"},"Variant example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'user = { name = "lnd-system-{variant}", group = true }\n')))),(0,i.yg)("p",null,'The "user" field specifies the user and, optionally, a group that will be associated with the service. Additionally, you can define whether the user\'s home directory should be created.'),(0,i.yg)("p",null,"In the first example, the user field is configured to create a group for the service and explicitly set not to create a home directory for the user."),(0,i.yg)("p",null,"In the variant example, the user field dynamically generates the user name based on the provided variant. It also creates a group for the service."),(0,i.yg)("p",null,"This field allows you to define the user and group settings for the service and manage the user's home directory as needed."),(0,i.yg)("h2",{id:"wanted_by"},"wanted_by"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Type: TemplateString"),(0,i.yg)("li",{parentName:"ul"},"Example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'wanted_by = "lnd-system.service"\n'))),(0,i.yg)("li",{parentName:"ul"},"Variant example",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'wanted_by = "lnd-system-{variant}.service"\n')))),(0,i.yg)("p",null,'The "wanted_by" field specifies the systemd target or service that the current package should be wanted by. It establishes a dependency relationship where the package is configured to be wanted by the specified target or service. This field ensures that the package is included in the dependencies of the target or service.'),(0,i.yg)("h2",{id:"wants"},"wants"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Type: TemplateString")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'wants = "postgresql.service"\n'))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Variant example"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-toml"},'wants = "postgresql-{variant}.service"\n')))),(0,i.yg)("p",null,'The "wants" field specifies the systemd target or service that the current package wants as a dependency. It establishes a relationship where the package indicates that it wants the specified target or service to be active. This field ensures that the package relies on the presence and activation of the specified target or service.'))}g.isMDXComponent=!0}}]);