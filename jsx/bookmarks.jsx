

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch('./data/bookmarks.json?h=70886f4d1d67e90265c1ca5ccc5370e3')
      .then(response => response.json())
      .then(
        (bookmarks) => {
          this.setState({
            isLoaded: true,
            items: bookmarks
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  // Use the render function to return JSX component
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table id="bookmark_table">
          {items.map(item => {
            const iconUrl = 'img/favicon/' + item.icon
            return (
            <tr><td class="bookmark" key={item.name}>
              <a href={item.webUrl} target={item.title}>
                <div><img width="16" height="16" hspace="8" src={iconUrl}/>{item.title}</div></a>
            </td></tr>
          )})}
        </table>
      );
    }
  }
}

ReactDOM.render(
  <Bookmarks />,
  document.getElementById('bookmarks')
)