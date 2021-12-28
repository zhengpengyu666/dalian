package routers

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func InitRouters() *echo.Echo {
	e := echo.New()
	// routers
	e.Use(middleware.GzipWithConfig(middleware.GzipConfig{
		Level: 5,
	}))
	e.Static("/api-json/model_1", "./model_1")
	e.Static("/api-json/model_2", "./model_2")
	e.Static("/obj", "./static/dist/obj")
	e.Static("/index", "./static/dist/index.html")
	e.Static("/", "./static/dist")
	api := e.Group("/api")
	{
		api.POST("/dw", Dw)
		api.POST("/nameList", NameList)
		api.POST("/modelData", ModelData)
	}
	return e
}
