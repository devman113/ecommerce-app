import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
  card: {
    width: '100%',
    paddingBottom: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 'calc(100% - 16px)'
  },
  flexContainer: {
    display: 'flex',
  },
  title: {
    fontSize: 18,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  subTitle: {
    fontSize: 14,
    marginTop: 20,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  submitButton: {
    marginLeft: 16,
  },
  panelContainer: {
    marginTop: 30,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
class FilterBoard  extends React.Component {
  state = {
    currency: 'USD',
    expanded: null,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
    this.props.updateProperties(name, event.target.value);
  };

  handleCheckChange = name => event => {
    this.setState({
      [name]: event.target.checked,
    });
    this.props.updateChecked(name, event.target.checked);
  };

  handleExpansionChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
        <Grid item sm={3}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title}>
                Filter
              </Typography>
              <div className={classes.flexContainer}>
                <TextField
                  id="standard-name"
                  label="Price"
                  placeholder="From"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleChange('minPrice')}
                />
                <TextField
                  id="standard-name"
                  label=" "
                  placeholder="To"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleChange('maxPrice')}
                />
              </div>
              <div className={classes.flexContainer}>
                <TextField
                  id="standard-name"
                  label="MOQ"
                  placeholder="From"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="standard-name"
                  label=" "
                  placeholder="To"
                  className={classes.textField}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <TextField
                id="standard-select-currency-native"
                select
                label="Currency"
                className={classes.textField}
                value={this.state.currency}
                onChange={this.handleChange('currency')}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
              >
                {currencies.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
              <div className={classes.panelContainer}>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleExpansionChange('panel1')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Source Sites</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.checkedTaobao}
                            onChange={this.handleCheckChange('checkedTaobao')}
                            value="checkedTaobao"
                            color="primary"
                          />
                        }
                        label="Taobao"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.checkedAlibaba}
                            onChange={this.handleCheckChange('checkedAlibaba')}
                            value="checkedAlibaba"
                            color="primary"
                          />
                        }
                        label="Alibaba"
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleExpansionChange('panel2')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>General</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.checkedListView}
                            onChange={this.handleCheckChange('checkedListView')}
                            value="checkedListView"
                            color="primary"
                          />
                        }
                        label="List View"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={this.state.checkedShowImages}
                            onChange={this.handleCheckChange('checkedShowImages')}
                            value="checkedShowImages"
                            color="primary"
                          />
                        }
                        label="Show Images"
                      />
                    </FormGroup>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            </CardContent>
            <CardActions>
              <Button className={classes.submitButton} onClick={this.props.updateGoods}>Update</Button>
            </CardActions>
          </Card>
        </Grid>
    );
  }
}

FilterBoard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilterBoard);