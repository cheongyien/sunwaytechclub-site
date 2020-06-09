
import Navaid from "navaid";
export function Router(draw) {
    return Navaid("/")
        // add routing policy here
        .on("/", () => import("@pages/Home").then(draw));
}