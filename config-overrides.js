module.exports = {
    webpack: (config, env) => {
        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = {
            cacheGroups: {
                default: false,
            },
        };

        config.output.filename = "[name]-react-rdv-v2.js";

        config.plugins[5].options.filename = "css/[name]-react-rdv-v2.css";
        config.plugins[5].options.moduleFilename = () => "css/main-react-rdv-v2.css";
        return config;
    },
};