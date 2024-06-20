import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { setBusDetails, setAirDetails, setTrainDetails, setCabDetails, setStatus, setError } from '../../redux/slices/dashboardSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardState = useSelector((state) => state.dashboard);
  const { busDetails = [], airDetails = [], trainDetails = [], cabDetails = [], status, error } = dashboardState || {};

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setStatus('loading'));

        // Fetch bus details
        const busResponse = await fetch('/path/to/busDetails.json');
        const busData = await busResponse.json();
        dispatch(setBusDetails(busData.data));

        // Fetch air details
        const airResponse = await fetch('/path/to/airDetails.json');
        const airData = await airResponse.json();
        dispatch(setAirDetails(airData.data));

        // Fetch train details
        const trainResponse = await fetch('/path/to/trainDetails.json');
        const trainData = await trainResponse.json();
        dispatch(setTrainDetails(trainData.data));

        // Fetch cab details
        const cabResponse = await fetch('/path/to/cabDetails.json'); // Replace with your actual path
        const cabData = await cabResponse.json();
        dispatch(setCabDetails(cabData.data));

        dispatch(setStatus('succeeded'));
      } catch (err) {
        dispatch({ type: 'dashboard/setStatus', payload: 'failed' });
        dispatch({ type: 'dashboard/setError', payload: err.toString() });
      }
    };

    fetchData();
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Bus Details</h2>
      <pre>{JSON.stringify(busDetails, null, 2)}</pre>
      <h2>Air Details</h2>
      <pre>{JSON.stringify(airDetails, null, 2)}</pre>
      <h2>Train Details</h2>
      <pre>{JSON.stringify(trainDetails, null, 2)}</pre>
      <h2>Cab Details</h2>
      <pre>{JSON.stringify(cabDetails, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
