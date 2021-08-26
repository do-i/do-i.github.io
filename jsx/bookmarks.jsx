class Modal extends React.Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return(
      <div class="modal">
        <div class="modal_content">
          <textarea value={this.props.value}/>
          <div class="btn_wrapper">
            <button class="large green button" onClick={this.handleClick}>
              close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class Bookmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      popupVisible: false,
      value: "[{}]"
    };
  }

  togglePopup = (event) => {
    this.setState({
      popupVisible: !this.state.popupVisible
    });
  };

  /*
    Creates a function which onClick event removes a bookmark entry from the bookmarks list.
    New list of bookmarks will be set in the state object. Modal popup shows the new list.

  */
  createRemovalFunction(title) {
    return (event) => {
      // remove the specified title from the bookmark list
      var bookmarks = [];
      this.state.items.forEach((bookmark) => {
        if (bookmark.title != title) {
          bookmarks.push(bookmark);
        }
      });
      console.log("title: "+title+ "; event:" + event);
      this.setState({
        value: JSON.stringify(bookmarks, null, 2)
      });
      this.togglePopup();
    }
  }

  componentDidMount() {
    fetch('./data/bookmarks.json?h=c35bd14deef8eed8f10926dd552e3064')
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
    const { error, isLoaded, items, modalShow } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <table id="bookmark_table">
            {items.map(item => {
              const iconUrl = 'img/favicon/' + item.icon
              return (
              <tr><td class="bookmark" key={item.name}>
                <a href={item.webUrl} target={item.title}>
                  <div><img width="16" height="16" hspace="8" src={iconUrl}/>{item.title}</div></a>
              </td><td><button
              onClick={this.createRemovalFunction(item.title)}>🗑️</button></td></tr>
            )})}
          </table>
          <div>
          {
            this.state.popupVisible
              ? <Modal toggle={this.togglePopup} value={this.state.value} />
              : null
          }
          </div>
        </div>
      );
    }
  }
}

ReactDOM.render(
  <Bookmarks />,
  document.getElementById('bookmarks')
)