package config

import "testing"

func TestLoadDefaultsToPort8080(t *testing.T) {
	t.Setenv("PORT", "")

	cfg, err := Load()
	if err != nil {
		t.Fatalf("Load() error = %v", err)
	}
	if cfg.Port != defaultPort {
		t.Errorf("Load().Port = %q, want %q", cfg.Port, defaultPort)
	}
}

func TestLoadUsesPortEnvironmentVariable(t *testing.T) {
	t.Setenv("PORT", "9090")

	cfg, err := Load()
	if err != nil {
		t.Fatalf("Load() error = %v", err)
	}
	if cfg.Port != "9090" {
		t.Errorf("Load().Port = %q, want %q", cfg.Port, "9090")
	}
}

func TestLoadRejectsInvalidPort(t *testing.T) {
	for _, port := range []string{"abc", "0", "65536"} {
		t.Run(port, func(t *testing.T) {
			t.Setenv("PORT", port)
			if _, err := Load(); err == nil {
				t.Error("Load() error = nil, want invalid port error")
			}
		})
	}
}
