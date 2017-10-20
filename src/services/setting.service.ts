
export class SettingService {
    private isSettingBackground = false;

    isAltBackground() {
        return this.isSettingBackground;
    }

    setBackground(alt: boolean) {
        this.isSettingBackground = alt;
    }

}