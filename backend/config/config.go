package config

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

const defaultPort = "8080"

type Config struct {
	Port string
}

func Load() (Config, error) {
	port := strings.TrimSpace(os.Getenv("PORT"))
	if port == "" {
		port = defaultPort
	}

	portNumber, err := strconv.Atoi(port)
	if err != nil || portNumber < 1 || portNumber > 65535 {
		return Config{}, fmt.Errorf("PORT must be a valid port number between 1 and 65535, got %q", port)
	}

	return Config{Port: port}, nil
}
