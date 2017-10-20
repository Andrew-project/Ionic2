import {Package} from "../data/servicePage/servicePage.interface";

export class PackageService {
    private packages: Package[] = [];

    addPackage(packageItem: Package) {
        this.packages.push(packageItem);
    }

    removePackage(packageItem: Package) {
        const pos = this.packages.findIndex(item => {
            return item.name === packageItem.name;
        });
        this.packages.splice(pos, 1);
    }

    getPackages() {
        return this.packages.slice();
    }
}