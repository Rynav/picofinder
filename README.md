## Picofinder

This is a public source code release for my site [picofinder](https://pico.rynav.xyz).

The database is not yet public, but will be soon.


### Special thanks to

- [ogohogo](https://github.com/ogohogo) - for his [picosong song list](https://github.com/ogohogo/picosong)
- [Schafterawka](https://discord.gg/rGzPNAyuAk) and [RB Raper Beats](https://discord.gg/CyBvDHr6du) communities - for testing, reporting and actually using the tool to find songs not found earlier.

### Technologies used:
 - [Next.js](https://nextjs.org/) - Frontend and backend in one project 🙏
 - [Tailwind CSS](https://tailwindcss.com/) - I dislike css
 - [shadcn/ui](https://ui.shadcn.com/) - Really neat modules
 - [TanStack Table](https://tanstack.com/table/latest) - really cool table library


### Contribution

Contributions are greatly appreciated, I am open for you to improve the app.


### Bug reports

If you found a bug please create an issue on this GitHub repo providing a screenshot, reproduction steps and console output.


### Running dev

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running on docker

This app provides Dockerfile, so to build the image you just need to run:
```shell
docker build -t <image_name> .
```
Then run the docker container with:
```shell
docker run -p 3000:3000 -v <path_to_folder_with_database>:/picodata --name=picofinder-docker --restart=unless-stopped -d <image_name>
```

## License

> Copyright (c) 2023-2024 Michał (Rynav)

This project is licensed under the [GPL-3.0 License](https://opensource.org/license/gpl-3-0) - see the [LICENSE](https://github.com/rynav/picofinder/blob/master/LICENSE.md) file for details.