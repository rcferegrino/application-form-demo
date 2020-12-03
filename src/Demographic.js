import React, {useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AddressContext from './AddressContext'

export default function Demographic() {
  const { address, setAddress } = useContext(AddressContext);
  const handleInputChange = (event) => {
    setAddress({
        ...address,
        [event.target.name] : event.target.checked
        
    })
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Please Choose One or More:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
        <FormControlLabel
            control={<Checkbox color="secondary" name="asian" checked={address.asian} />}
            label="Asian" onChange={handleInputChange} 
          />
        </Grid>
        <Grid item xs={12} md={12}>
        <FormControlLabel
            control={<Checkbox color="secondary" name="white" value="yes"  checked={address.white} />}
            label="White" onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12}>
        <FormControlLabel
            control={<Checkbox color="secondary" name="black" value="yes"  checked={address.black} />}
            label="Black or African American" onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
