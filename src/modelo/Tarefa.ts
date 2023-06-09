export class Tarefa {
    
    private _id?: number;
    private _relevance?: string;
    private _title?: string; 
    private _completed?:boolean;

    constructor(
        id?: number,
        relevance?:string, 
        title?: string,
        completed?:boolean) {
        
        this._id = id;
        this._relevance=relevance;
        this._title = title;
        this._completed=completed; 
    } 

    public set id(value:number){
      this._id =value
  }

  public get id():number{
    return this._id?this._id:-1; 
}
    public get relevance():string{
        return this._relevance? this._relevance :'';
    }     
     
    public set relevance(value:string){
         this._relevance= value;
    }     
     
    
    public get title(): string {
        return this._title? this._title :'';
      }

    public set title(value: string) {
        this._title =value;
      }
    public get completed():boolean{
        return this._completed?this._completed:false;
    }  
 
    public set completed(value:boolean){
         this._completed=value;
    }
     

}

 