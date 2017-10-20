import {DatePage} from "../app/templates/date/date";
import {AlertPage} from "../app/templates/alert/alert";
import {CardPage} from "../app/templates/card/card";
import {FabPage} from "../app/templates/fab/fab";
import {ListViewPage} from "../app/templates/list-view/list-view";
import {LoadingPage} from "../app/templates/loading/loading";
import {TestPage} from "../app/templates/test/test";
import {TouchPage} from "../app/templates/touch-event/touch-event";
import {ShoppingPage} from "../pages/shopping/shopping";
import {RecipesPage} from "../pages/recipes/recipes";
import {AddPlacePage} from "../pages/add-place/add-place";
import {PlacesPage} from "../pages/places/places";

export interface Tool {
    id: number,
    title: string,
    iconName: string,
    component: any
}

export class ToolsListService {
    private toolsList: Tool[] = [
        {
            id: 1,
            iconName: 'time',
            title: 'DateTime',
            component: DatePage
        },
        {
            id: 2,
            iconName: 'alert',
            title: 'Alert',
            component: AlertPage
        },
        {
            id: 3,
            iconName: 'card',
            title: 'Card',
            component: CardPage
        },
        {
            id: 4,
            iconName: 'disc',
            title: 'FAB',
            component: FabPage
        },
        {
            id: 5,
            iconName: 'list',
            title: 'List-view',
            component: ListViewPage
        },
        {
            id: 6,
            iconName: 'flower',
            title: 'Loading',
            component: LoadingPage
        },
        {
            id: 7,
            iconName: 'rainy',
            title: 'Test',
            component: TestPage
        },
        {
            id: 8,
            iconName: 'bulb',
            title: 'Touch-event',
            component: TouchPage
        },
        {
            id: 9,
            iconName: 'water',
            title: 'Shopping',
            component: ShoppingPage
        },
        {
            id: 10,
            iconName: 'book',
            title: 'Recipes',
            component: RecipesPage
        },
        {
            id: 11,
            iconName: 'map',
            title: 'Place And Photo',
            component: PlacesPage
        }
    ];

    getAllTools() {
        return this.toolsList.slice();
    }
}