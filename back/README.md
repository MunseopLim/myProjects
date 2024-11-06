# Build Docker Image

To build the Docker image, use the following command:

```bash
docker build -t <image_name>:<tag> .
```

- **`<image_name>`**: The name you want to give your Docker image.
- **`<tag>`**: The tag or version number for your image.

**Example:**

```bash
docker build -t myproject:1.0 .
```

This command builds an image named `myproject` with the tag `1.0` using the Dockerfile in the current directory.
