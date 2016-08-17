export class DataFilterComponent implements ng.IComponentOptions {
    public controller: Function = DataFilterController;
    public template: string = `
       <div class="form-inline">
          <button type="submit" class="btn btn-default">
            <i class="fa fa-plus"></i>
            Add
          </button>
          <div class="form-group">
            <input type="search" class="form-control" placeholder="Search products">
          </div>
          <div class="form-group">
           Sort by
             <select class="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
        
    `;
}
export class DataFilterController {

}