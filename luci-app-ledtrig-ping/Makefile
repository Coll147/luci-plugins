include $(TOPDIR)/rules.mk

LUCI_TITLE:=LuCI LED trigger: ping target
LUCI_DESCRIPTION:=LED trigger that indicates reachability of a host (on = reachable, off = unreachable).
LUCI_DEPENDS:=+luci-base

PKG_VERSION:=1.0.5
PKG_RELEASE:=1
PKG_LICENSE:=Apache-2.0
PKG_MAINTAINER:=Coll147

include $(TOPDIR)/feeds/luci/luci.mk

define Package/$(PKG_NAME)/install
	$(call Package/$(PKG_NAME)/install/default,$(1))
	chmod +x $(1)/etc/init.d/ledtrig-ping
	chmod +x $(1)/usr/libexec/ledtrig-ping
endef

# ensure permissions after install on target
define Package/$(PKG_NAME)/postinst
	# make sure init script and binary are executable
	sh chmod +x /etc/init.d/ledtrig-ping || true
	sh chmod +x /usr/libexec/ledtrig-ping || true
	# enable service for convenience
	sh /etc/init.d/ledtrig-ping enable >/dev/null 2>&1 || true
endef

# call BuildPackage - OpenWrt buildroot signature
