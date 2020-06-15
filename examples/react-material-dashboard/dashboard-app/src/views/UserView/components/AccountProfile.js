import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Divider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10
  },
  name: {
    fontSize: 18,
    fontWeight: "bold"
  },
  details: {
    display: "flex",
    padding: 5
  },
  avatar: {
    height: 60,
    width: 60,
    flexShrink: 0,
    flexGrow: 0,
    marginRight: 25
  },
  progress: {
    marginTop: theme.spacing(2)
  },
  uploadButton: {
    marginRight: theme.spacing(2)
  },
  divider: {
    marginBottom: theme.spacing(3)
  },
  textRow: {
    marginTop: theme.spacing(2)
  },
  dateText: {
    width: 60,
    marginRight: 30,
    display: "inline-block",
    fontSize: 13
  },
  smallBoldText: {
    fontSize: 14,
    fontWeight: "bold"
  }
}));

const AccountProfile = props => {
  const {
    className,
    userFirstName,
    userLastName,
    gender,
    age,
    city,
    id,
    ...rest
  } = props;

  const classes = useStyles();

  const user = {
    avatar: gender === 'male' ?  "/images/avatars/avatar_1.png" : "/images/avatars/avatar_2.png"
  };

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.details}>
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <div>
            <Typography
              variant="h4"
              className={classes.name}
            >
              {userFirstName} {userLastName}
            </Typography>
            <Typography
              color="textSecondary"
            >
              {capitalizeFirstLetter(gender)}, {age} years
            </Typography>
          </div>
        </div>
        <div className={classes.progress}>
          <Divider className={classes.divider}/>
          <div className={classes.textRow}>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
              component="span"
            >
              City
            </Typography>
            <Typography
              className={classes.smallBoldText}
              variant="body1"
              component="span"
            >
              {city}
            </Typography>
          </div>
          <div className={classes.textRow}>
            <Typography
              className={classes.dateText}
              color="textSecondary"
              variant="body1"
              component="span"
            >
              ID
            </Typography>
            <Typography
              className={classes.smallBoldText}
              variant="body1"
              component="span"
            >
              {id}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

AccountProfile.propTypes = {
  className: PropTypes.string
};

export default AccountProfile;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
