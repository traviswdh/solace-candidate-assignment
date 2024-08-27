import { useState } from "react";
import { Card, CardContent, Typography, Button, CardActions } from "@mui/material";
import {
  LocationOn as LocationIcon,
  School as DegreeIcon,
  List as SpecialtiesIcon,
  Work as ExperienceIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";

type Advocate = {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: string;
};

export default function AdvocateCard({ advocate }: { advocate: Advocate }) {
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);

  const handleShowMore = () => {
    setShowAllSpecialties(!showAllSpecialties);
  };

  return (
    <Card style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent style={{ flexGrow: 1, marginBottom: "16px" }}>
        <Typography variant="h6" gutterBottom>
          {advocate.firstName} {advocate.lastName}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <LocationIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: "4px" }} />
          {advocate.city}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          <DegreeIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: "4px" }} />
          {advocate.degree}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          <ExperienceIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: "4px" }} />
          {advocate.yearsOfExperience} years
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          <PhoneIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: "4px" }} />
          {advocate.phoneNumber}
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          <SpecialtiesIcon fontSize="small" style={{ verticalAlign: "middle", marginRight: "4px" }} />
          <strong>Specialties:</strong>
          <ul style={{ listStyleType: "disc", paddingLeft: "30px", transition: "max-height 0.3s ease" }}>
            {(showAllSpecialties ? advocate.specialties : advocate.specialties.slice(0, 2)).map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
          {advocate.specialties.length > 2 && (
            <Button size="small" color="primary" onClick={handleShowMore}>
              {showAllSpecialties ? "Show less..." : "Show more..."}
            </Button>
          )}
        </Typography>
      </CardContent>
      <CardActions style={{ marginTop: "auto" }}>
        <Button size="small" color="primary">
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}