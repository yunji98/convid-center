import React from 'react';
import { connect } from 'react-redux';
import CenterList from '../components/CenterList';
import { getCenters } from '../modules/centers';

const { useEffect } = React;

const CentersContainer = ({ getCenters, centers, loadingCenters }) => {
  useEffect(() => {
    getCenters();
  }, [getCenters]);
  
  return <CenterList centers={centers} loadingCenters={loadingCenters} />;
};

export default connect(
  ({ centers }) => ({
    centers: centers.centers,
    loadingCenters: centers.loading.GET_CENTERS,
  }),
  {
    getCenters,
  },
)(CentersContainer);