package main

import (
	"dalian/config"
	"dalian/routers"
	"fmt"
)

func main() {
	config.Init()
	r := routers.InitRouters()
	if err := r.Start(config.GetConfig().GetString("server.port")); err != nil {
		fmt.Println("启动异常")
	}
}
