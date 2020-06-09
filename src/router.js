
import Navaid from "navaid";
export function Router(draw) {
    return Navaid("/")
        // add routing policy here
        .on("/", () => import("@pages/Home").then(draw))
        .on("/event", () => import("@pages/Event").then(draw))
        .on("/about", () => import("@pages/About").then(draw));
}