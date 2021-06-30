const CATEGORIES = [
  { key: '0', name: 'Action' },
  { key: '1', name: 'Biography' },
  { key: '2', name: 'History' },
  { key: '3', name: 'Horror' },
  { key: '4', name: 'Kids' },
  { key: '5', name: 'Learning' },
  { key: '6', name: 'Sci-Fi' },
];

const BookForm = () => (
  <form>
    <div>
      <label htmlFor="inputTitle" className="form-label">
        Title
        <input type="text" className="form-control" id="inputTitle" />
      </label>
    </div>
    <div>
      <label htmlFor="category" className="form-label">
        Category
        <select name="category" className="form-select" id="category">
          {
            CATEGORIES.map(({ key, name }) => <option value={name} key={key}>{name}</option>)
          }
        </select>
      </label>
    </div>
    <div className="col-md-12">
      <button type="button" className="btn btn-primary">Create book</button>
    </div>
  </form>
);

export default BookForm;
