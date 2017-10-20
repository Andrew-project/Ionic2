import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Tool, ToolsListService} from "../../services/tools.list";

@Component({
    selector: 'page-tools',
    templateUrl: 'tools.html'
})
export class ToolsPage {

    toolList: Tool[];

    constructor(private navCtrl: NavController,
                private toolsListService: ToolsListService) {
    }

    ionViewWillEnter () {
        this.toolList = this.toolsListService.getAllTools();
    }

    choose(id: number) {
        let page = this.toolList.find((page) => {
            return page.id == id;
        });
        this.navCtrl.push(page.component);
    }
}
