import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CssBaseline } from '@mui/material';
import { ArticleType } from '../AdminArticleItem/AdminArticle';
import { getAllPartnerArticles } from '../../api/api';
import { Link } from 'react-router-dom';

export default function AdminArticles() {


  const [articles, setArticles] = React.useState<ArticleType[]>([]);

  React.useEffect(() => {
    (async () => {
      const articles : ArticleType[] = await getAllPartnerArticles();

      console.log(articles);
      
      setArticles(articles);
    })()
  }, [])

  return (
    <>
      <Box className='flex justify-between'>
        <Typography variant='h4'>Партнерские статьи</Typography>
        <Link to={'/admin/create'}>
            <Button color='success' variant='contained'>Создать</Button>
        </Link>
      </Box>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 items-start'>
    
        {Boolean(articles.length) && articles.map(({id, img, description, title}) => (
           <Link to={`/admin/edit/${id}`}>
              <Card key={id} sx={{ maxWidth: 345 }}>
              <CardActionArea>
                  <CardMedia
                  component="img"
                  height="140"
                  image={img}
                  alt="green iguana"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                      {description}
                  </Typography>
                  </CardContent>
              </CardActionArea>
            </Card>
           </Link>
        ))}
      </div>
    </>
  );
}