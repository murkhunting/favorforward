# Favor Trader



## Description



## User Stories

- 





## Server Routes (back-end)





| L    | **Method** | **Route**            | **Render View/ from-to**    | **Description**               | **Request - Body**  |
| ---- | ---------- | -------------------- | --------------------------- | ----------------------------- | ------------------- |
| 1    | `GET`      | `/`                  | Home                        | mapbox render favor locations |                     |
| 12   | `GET`      | `/:id/favordetail`   | Dashboard>**FavorDetail**   |                               |                     |
| 16   | `GET`      | `/mapbx favors`      |                             |                               |                     |
| 2    | `GET`      | `/auth/signup`       | *>**Signup**                |                               |                     |
| 3    | `POST`     | `/auth/signup`       | Signup>**Home**(prev page)  |                               | `{email, password}` |
| 4    | `GET`      | `/auth/login`        | *>**Login**                 |                               |                     |
| 5    | `POST`     | `/auth/login`        | Login>**Home**(prev page)   |                               | `{email, password}` |
| 6    | `GET`      | `/auth/logout`       | *>**Home**                  |                               |                     |
| 7    | `GET`      | `/user/dashboar/:id` | *>**Dashboard**             |                               |                     |
| 8    | `GET`      | `/user/edit`         | Dashboard>**UserEdit**      |                               |                     |
| 9    | `POST`     | `/user/edit`         | UserEdit>**Dashboard**      |                               |                     |
| 10   | `GET`      | `/favor/create`      | Dasboard>**FavorCreate**    |                               |                     |
| 11   | `POST`     | `/favor/create`      | FavorCreate>**FavorDetail** |                               |                     |
| 13   | `GET`      | `/favor/:id/edit`    | FavorDetail>**FavorEdit**   |                               |                     |
| 14   | `PUT`      | `/favor/:id/edit`    | FavorEdit>**FavorDetail**   |                               |                     |
| 15   | `DELETE`   | `/favor/:id/delete`  | FavorDetail>**Dashboard**   |                               |                     |
| 17   |            |                      |                             |                               |                     |
| 18   |            |                      |                             |                               |                     |
| 19   |            |                      |                             |                               |                     |



## Models

User model

```
{
    age: { type: Number, min: 16 }, 
    name: { type: String },
    email: { type: String, match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, required: true, unique: true },
    password: { type: String, minlength: 2, required: true }, //change to 6 at the end
    profilepic: { type: String, default: '/images/icon-userdefault.png' }, //remember to change default
   
    favorsAsked: [{ type: Schema.Types.ObjectId, ref: 'Favor' }], //my favors created by me
    favorsProvided: [{ type: Schema.Types.ObjectId, ref: 'Favor' }], //other favors

    fRecived: Number,
    fRecivedScore: Number,
    fGived: Number,
    fGivedScore: Number
}
```

Favor model

```
{
  askerUserId: { type: Schema.Types.ObjectId, ref: 'User' },
  providerUserId: [{ type: Schema.Types.ObjectId, ref: 'User' , default: null}],
  title: { type: String, maxlength: 50},
  date: { type:Date, required: true},
  timeStart:  { type:Date, required: true },
  timeEnd:  { type:Date, required: true },
  location: { type:String, required: true },   //check what we need from mapbox
  description: { type:Date, required: false },
  tags: [String],
  comments: [{user: Id, comment: String}], 
  status: { type: String, enum: [ "Request to do favor pending", "Accept and reserve favor", "Finished"]},
  timestamps: {createdAt: 'create_at', updatedAt: 'updated_at' },
  satisfactionScore: { type: Schema.Types.ObjectId, ref: 'SatiScore' },
  location: { 
    type: { type: String }, 
    coordinates: [Number]
  }
}
```

Satisfaction model

```
{
    favorId: [{ type: Schema.Types.ObjectId, ref: 'Trade' }],
    AskerToProviderScore: { type: Number, enum: [1, 2, 3, 4, 5], required: true},
    AskerToProviderComment: { type: String, enum: [1, 2, 3, 4, 5], required: true},
    ProviderToAskerScore: { type: Number, enum: [1, 2, 3, 4, 5], required: true},
    ProviderToAskerComment: { type: String, enum: [1, 2, 3, 4, 5], required: true}
}
```

## Backlog

- 

## Links

#### Git

[Repository Link](https://github.com/MartaJank/why-so-serial-m2-project)

[Deploy Link](https://why-so-serial.herokuapp.com/)

#### Trello

[Our Trello board](https://trello.com/b/twrgxecA/favor-trello)

#### Slides

[Our amazing presentation!](https://docs.google.com/presentation/)