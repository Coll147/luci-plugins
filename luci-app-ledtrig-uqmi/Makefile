include $(TOPDIR)/rules.mk

LUCI_TITLE:=LuCI LED trigger: 4G signal strength (uqmi RSSI)
LUCI_DESCRIPTION:=Turns an LED on/off based on 4G modem RSSI read via uqmi.
LUCI_DEPENDS:=+luci-base +uqmi

PKG_VERSION:=1.0.4
PKG_RELEASE:=1
PKG_LICENSE:=Apache-2.0
PKG_MAINTAINER:=LuCI community <luci@lists.openwrt.org>

include $(TOPDIR)/feeds/luci/luci.mk

define Package/$(PKG_NAME)/install
	$(call Package/$(PKG_NAME)/install/default,$(1))
	$(INSTALL_DIR)  $(1)/etc/init.d
	$(INSTALL_DIR)  $(1)/usr/libexec
	$(INSTALL_BIN)  ./root/etc/init.d/ledtrig-uqmi  $(1)/etc/init.d/ledtrig-uqmi
	$(INSTALL_BIN)  ./root/usr/libexec/ledtrig-uqmi  $(1)/usr/libexec/ledtrig-uqmi
	$(INSTALL_DIR)  $(1)/usr/share/ucitrack
	$(INSTALL_DATA) ./root/usr/share/ucitrack/ledtrig-uqmi.json \
	$(1)/usr/share/ucitrack/ledtrig-uqmi.json
endef

define Package/$(PKG_NAME)/postinst
#!/bin/sh
/etc/init.d/ledtrig-uqmi enable >/dev/null 2>&1 || true
endef

# call BuildPackage - OpenWrt buildroot signature
