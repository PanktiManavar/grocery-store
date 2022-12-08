export const VerifyToken = async () => {
    try {
        if (!sessionStorage.getItem("token") && !sessionStorage.getItem("role")) {
            // do nothing
            window.location.replace("/login");
        } else if (!sessionStorage.getItem("token") && !sessionStorage.getItem("role")) {
            window.location.replace("/login");
        } else if (!sessionStorage.getItem("token") && !sessionStorage.getItem("role")) {
            window.location.replace("/login");
        }
    } catch (error) {
        //window.location.replace("/admin/login");
    }
}