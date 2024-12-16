import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ProductEdge } from "../../@types";

type Props = {
  data: ProductEdge[];
};

export default function HomeView({ data }: Readonly<Props>) {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Products
      </Typography>
      <Grid container spacing={4}>
        {data.map(({ node }) => (
          <Grid item xs={12} sm={6} md={4} key={node.id}>
            <Card
              sx={{
                height: "100%",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={node.images.edges[0]?.node.src || "/placeholder.png"}
                alt={node.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="h2">
                  {node.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 1 }}
                >
                  {node.description}
                </Typography>
                <Typography variant="body1" color="primary">
                  Price: ${node.variants.edges[0]?.node.price.amount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
