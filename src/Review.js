import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AddressContext from './AddressContext'


const addresses = [
  '1 Material-UI Drive',
  'Reactville',
  'Anytown',
  '99999',
  'USA',
];

const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const { address, setAddress } = useContext(AddressContext);
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Name
          </Typography>
          <Typography gutterBottom>{address.firstName} {address.lastName}</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Address
          </Typography>
          <Typography gutterBottom>{address.address1} {address.address2}</Typography>
          <Typography gutterBottom>{address.city}, {address.state}</Typography>
          <Typography gutterBottom>{address.zip}, {address.country}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Demographic Information
          </Typography>
          <Grid container>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom>asian:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{address.asian.toString()}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>white:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{address.white}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>black:</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{address.black}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
