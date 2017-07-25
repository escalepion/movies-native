import React from 'react';
import { Button, Icon, Card, CardItem, Text, Thumbnail, Left, Body } from 'native-base';

const MovieListItem = ({ movie, onPress }) => {
  let url= null;
    if (movie.poster_path) {
       url = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    } else {
       url = 'http://www.barcouncilofindia.org/wp-content/uploads/2010/07/no-photo.jpg';
    }
    return (
        <Card>
            <CardItem bordered>
              <Left>
                <Thumbnail source={{ uri: url }} />
                <Body>
                  <Text>{movie.name ? movie.name : movie.title}</Text>
                  <Text note>{movie.release_date && `Date: ${movie.release_date}`}</Text>
                  <Text note>Average Rating: {movie.vote_average}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Text>
                {movie.overview ? movie.overview : 'No overview to show.Sorry.'}
              </Text>

              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name="md-share-alt" />
                  <Text button onPress={() => onPress(movie)}>Go to movie</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
    );
};

export default MovieListItem;
