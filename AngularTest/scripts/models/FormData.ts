module MyApp.Models {
    export class FormData {
        public fullName: string;
        public dozen: number;
        public skyColor: string;
        public selectedDateTime: string;
        public players: string[];
        public favoriteSaying: string;

        constructor() {
            this.fullName = '';
            this.dozen = 1;
            this.skyColor = '';
            this.selectedDateTime = '';
            this.players = [];
            this.favoriteSaying = '';
        }
    }
} 