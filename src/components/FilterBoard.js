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

const languages = [
  { value: 'af', label: 'Afrikaans' },
  { value: 'sq', label: 'Albanian' },
  { value: 'am', label: 'Amharic' },
  { value: 'ar', label: 'Arabic' },
  { value: 'hy', label: 'Armenian' },
  { value: 'az', label: 'Azerbaijani' },
  { value: 'eu', label: 'Basque' },
  { value: 'be', label: 'Belarusian' },
  { value: 'bn', label: 'Bengali' },
  { value: 'bs', label: 'Bosnian' },
  { value: 'bg', label: 'Bulgarian' },
  { value: 'ca', label: 'Catalan' },
  { value: 'ceb', label: 'Cebuano' },
  { value: 'ny', label: 'Chichewa' },
  { value: 'zh', label: 'Chinese (Simplified)' },
  { value: 'zh-TW', label: 'Chinese (Traditional)' },
  { value: 'co', label: 'Corsican' },
  { value: 'hr', label: 'Croatian' },
  { value: 'cs', label: 'Czech' },
  { value: 'da', label: 'Danish' },
  { value: 'nl', label: 'Dutch' },
  { value: 'en', label: 'English' },
  { value: 'eo', label: 'Esperanto' },
  { value: 'et', label: 'Estonian' },
  { value: 'tl', label: 'Filipino' },
  { value: 'fi', label: 'Finnish' },
  { value: 'fr', label: 'French' },
  { value: 'fy', label: 'Frisian' },
  { value: 'gl', label: 'Galician' },
  { value: 'ka', label: 'Georgian' },
  { value: 'de', label: 'German' },
  { value: 'el', label: 'Greek' },
  { value: 'gu', label: 'Gujarati' },
  { value: 'ht', label: 'Haitian Creole' },
  { value: 'ha', label: 'Hausa' },
  { value: 'haw', label: 'Hawaiian' },
  { value: 'iw', label: 'Hebrew' },
  { value: 'hi', label: 'Hindi' },
  { value: 'hmn', label: 'Hmong' },
  { value: 'hu', label: 'Hungarian' },
  { value: 'is', label: 'Icelandic' },
  { value: 'ig', label: 'Igbo' },
  { value: 'id', label: 'Indonesian' },
  { value: 'ga', label: 'Irish' },
  { value: 'it', label: 'Italian' },
  { value: 'ja', label: 'Japanese' },
  { value: 'jw', label: 'Javanese' },
  { value: 'kn', label: 'Kannada' },
  { value: 'kk', label: 'Kazakh' },
  { value: 'km', label: 'Khmer' },
  { value: 'ko', label: 'Korean' },
  { value: 'ku', label: 'Kurdish (Kurmanji)' },
  { value: 'ky', label: 'Kyrgyz' },
  { value: 'lo', label: 'Lao' },
  { value: 'la', label: 'Latin' },
  { value: 'lv', label: 'Latvian' },
  { value: 'lt', label: 'Lithuanian' },
  { value: 'lb', label: 'Luxembourgish' },
  { value: 'mk', label: 'Macedonian' },
  { value: 'mg', label: 'Malagasy' },
  { value: 'ms', label: 'Malay' },
  { value: 'ml', label: 'Malayalam' },
  { value: 'mt', label: 'Maltese' },
  { value: 'mi', label: 'Maori' },
  { value: 'mr', label: 'Marathi' },
  { value: 'mn', label: 'Mongolian' },
  { value: 'my', label: 'Myanmar (Burmese)' },
  { value: 'ne', label: 'Nepali' },
  { value: 'no', label: 'Norwegian' },
  { value: 'ps', label: 'Pashto' },
  { value: 'fa', label: 'Persian' },
  { value: 'pl', label: 'Polish' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'pa', label: 'Punjabi' },
  { value: 'ro', label: 'Romanian' },
  { value: 'ru', label: 'Russian' },
  { value: 'sm', label: 'Samoan' },
  { value: 'gd', label: 'Scots Gaelic' },
  { value: 'sr', label: 'Serbian' },
  { value: 'st', label: 'Sesotho' },
  { value: 'sn', label: 'Shona' },
  { value: 'sd', label: 'Sindhi' },
  { value: 'si', label: 'Sinhala' },
  { value: 'sk', label: 'Slovak' },
  { value: 'sl', label: 'Slovenian' },
  { value: 'so', label: 'Somali' },
  { value: 'es', label: 'Spanish' },
  { value: 'su', label: 'Sundanese' },
  { value: 'sw', label: 'Swahili' },
  { value: 'sv', label: 'Swedish' },
  { value: 'tg', label: 'Tajik' },
  { value: 'ta', label: 'Tamil' },
  { value: 'te', label: 'Telugu' },
  { value: 'th', label: 'Thai' },
  { value: 'tr', label: 'Turkish' },
  { value: 'uk', label: 'Ukrainian' },
  { value: 'ur', label: 'Urdu' },
  { value: 'uz', label: 'Uzbek' },
  { value: 'vi', label: 'Vietlabelse' },
  { value: 'cy', label: 'Welsh' },
  { value: 'xh', label: 'Xhosa' },
  { value: 'yi', label: 'Yiddish' },
  { value: 'yo', label: 'Yoruba' },
  { value: 'zu', label: 'Zulu' },
];

class FilterBoard  extends React.Component {
  state = {
    currency: 'USD',
    language: 'en',
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
                  onChange={this.handleChange('minMOQ')}
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
              <TextField
                id="standard-select-language-native"
                select
                label="Language"
                className={classes.textField}
                value={this.state.language}
                onChange={this.handleChange('language')}
                SelectProps={{
                  native: true,
                  MenuProps: {
                    className: classes.menu,
                  },
                }}
                margin="normal"
              >
                {languages.map(option => (
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
              <Button className={classes.submitButton} variant='contained' color='primary' onClick={this.props.updateGoods}>Update</Button>
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