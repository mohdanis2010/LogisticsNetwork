import React from "react";
import { connect } from "react-redux";
import GoogleMap from "../Components/GoogleMap";
import "isomorphic-unfetch";

import {
  container,
  subContaoner,
  tableContaoner,
  leftContaoner,
  righContaoner,
  contentHeading,
  content,
  ulCls,
  liCls,
} from "../style";

import { getTransactionDetails, getTransaction } from "../store";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 1.371778,
        lng: 103.893059,
      },
      zoom: 18,
      data: [],
    };
  }
  static async getInitialProps({ reduxStore, req }) {
    return {};
  }
  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    const res = await fetch(`http://localhost:4000/getTrans`);
    const data = await res.json();
    const { getTransaction } = this.props;
    getTransaction(data);
  };

  listItemsHandler = async items => {
    const res = await fetch(`http://localhost:4000/findBy/${items}`);
    const data = await res.json();

    this.setState({
      center: {
        lat: data.latitude,
        lng: data.longitude,
      },
      data,
    });
  };

  render() {
    const { transactions = {} } = this.props;
    const { data } = this.state;
    return (
      <div style={container}>
        <div style={subContaoner}>
          <div style={leftContaoner}>
            <div style={contentHeading}>Items</div>
            <ul style={ulCls}>
              {transactions.map(item => (
                <li
                  style={liCls}
                  key={item._id}
                  className="collection-item"
                  onClick={() => this.listItemsHandler(item._id)}>
                  {item.client_id}
                </li>
              ))}
            </ul>
          </div>

          <div style={righContaoner}>
            <div style={contentHeading}>Item Details</div>
            {data.length !== 0 ? (
              <div style={content}>
                <div>
                  <strong>Status:</strong> {data.is_success}
                </div>
                <div>
                  <strong>Zone:</strong> {data.zone}
                </div>
                <div>
                  <strong>No of items:</strong> {data.n_packages}
                </div>
                <div>
                  <strong>Client unique ID:</strong> {data.client_id}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div style={tableContaoner}>
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMap
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}>
              {" "}
            </GoogleMap>
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mapCenter: state.center,
  transactions: state.transactions,
});

const mapDispatchToProps = {
  getTransaction,
  getTransactionDetails,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
