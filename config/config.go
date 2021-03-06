package config

import (
	"fmt"
	"github.com/spf13/viper"
)

var config *viper.Viper

func Init() {
	// init config
	var err error
	config = viper.New()
	config.SetConfigType("yml")
	// common config
	config.SetConfigName("common")
	config.AddConfigPath("../config/")
	config.AddConfigPath("config/")
	err = config.ReadInConfig()
	if err != nil {
		fmt.Println("初始化异常")
	}
}
func GetConfig() *viper.Viper {
	return config
}
