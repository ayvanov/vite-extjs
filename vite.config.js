import vite from "vite";

vite["__env"] = vite.loadEnv(process.env.NODE_ENV, process.cwd());
export default {
    server: {
        proxy: {
            "/api": {
                target: vite["__env"]["VITE_API_URL"],
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
};
