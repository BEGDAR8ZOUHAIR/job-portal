import { Grid, Typography, Button, makeStyles, Container, Box, Paper } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { useHistory } from "react-router-dom";
import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: "93vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #8b5cf6 100%)",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    top: -120,
    right: -120,
    width: 420,
    height: 420,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.08)",
    filter: "blur(1px)",
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    padding: theme.spacing(6, 0),
  },
  heroTitle: {
    fontWeight: 800,
    letterSpacing: -0.5,
  },
  heroSubtitle: {
    marginTop: theme.spacing(2),
    opacity: 0.95,
  },
  ctas: {
    marginTop: theme.spacing(4),
    display: "flex",
    gap: theme.spacing(2),
  },
  secondarySection: {
    padding: theme.spacing(8, 0),
    backgroundColor: "#f8fafc",
  },
  featureCard: {
    padding: theme.spacing(4),
    height: "100%",
    borderRadius: 16,
  },
  featureIconWrap: {
    width: 56,
    height: 56,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
    color: "#0ea5e9",
    background: "#e0f2fe",
  },
}));

const Welcome = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleBrowseJobs = () => history.push("/home");
  const handleStartHiring = () => {
    if (!isAuth()) return history.push("/signup");
    if (userType() === "recruiter") return history.push("/addjob");
    return history.push("/home");
  };

  return (
    <>
      <Box className={classes.hero}>
        <span className={classes.heroOverlay} />
        <Container maxWidth="lg" className={classes.heroContent}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h2" className={classes.heroTitle}>
                Find your next opportunity
              </Typography>
              <Typography variant="h6" className={classes.heroSubtitle}>
                Discover curated roles from top companies. Apply in minutes and track your applications seamlessly.
              </Typography>
              <div className={classes.ctas}>
                <Button size="large" variant="contained" color="default" onClick={handleBrowseJobs}>
                  Browse Jobs
                </Button>
                <Button size="large" variant="outlined" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }} onClick={handleStartHiring}>
                  Post a Job
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper elevation={8} style={{ borderRadius: 16, padding: 24, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(3px)", color: "#fff" }}>
                <Typography variant="h6" style={{ fontWeight: 700, marginBottom: 8 }}>
                  Why Job Portal?
                </Typography>
                <Typography variant="body1" style={{ opacity: 0.95 }}>
                  Built for both candidates and recruiters, our platform streamlines job search and hiring with a frictionless experience.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box className={classes.secondarySection}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Paper className={classes.featureCard} elevation={2}>
                <div className={classes.featureIconWrap}>
                  <WorkOutlineIcon />
                </div>
                <Typography variant="h6" gutterBottom>
                  Curated Listings
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Explore high-quality roles across tech, design, product, and more. Filter by role type, salary, duration, and rating.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.featureCard} elevation={2}>
                <div className={classes.featureIconWrap}>
                  <VerifiedUserIcon />
                </div>
                <Typography variant="h6" gutterBottom>
                  Safe & Secure
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Verified recruiters and candidates keep your experience safe. Your data is protected with secure authentication.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper className={classes.featureCard} elevation={2}>
                <div className={classes.featureIconWrap}>
                  <TrendingUpIcon />
                </div>
                <Typography variant="h6" gutterBottom>
                  Track Progress
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Stay on top of every application. Recruiters can manage applicants and move quickly with clear pipelines.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      justify="center"
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant="h2">Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
