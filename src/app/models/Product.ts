export class Product {
    public external_id: string;
    public is_ignored: boolean;
    public name: string;
    public synced: number;
    public thumbnail_url: string;
    public variants: number;

    constructor(){
        this.external_id = "";
        this.is_ignored = false;
        this.name = "";
        this.thumbnail_url = "";
        this.synced = 0;
        this.variants = 0;
    }
}