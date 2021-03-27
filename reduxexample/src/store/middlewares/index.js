export class middleware {
  static fetchData = async (id) => {
    try {
      let result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
      let data = await result.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
}
